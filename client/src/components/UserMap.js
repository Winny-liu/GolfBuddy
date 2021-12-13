import React, { useEffect, useState, useContext, useCallback } from "react";
import styled from "styled-components";
import { UsersContext } from "./Contexts/UsersContext";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import zIndex from "@mui/material/styles/zIndex";
//import { formatRelative } from "date-fns";
//import "@reach/combobox/styles.css";
import Geocode from "react-geocode";
Geocode.setLanguage("en");

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = { lat: 45.5017, lng: -73.5673 };
const options = {
  // styles: mapContainerStyle,
  //disableDefaultUI: true,
};

const UserMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState();

  console.log(isLoaded, loadError);
  const onMapClick = useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
    ]);
  }, []);

  // const mapRef = React.useRef();
  //const onMapLoad = React.useCallback((map) => {
  //  mapRef.current = map;
  //});
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
      //options={options}
      onClick={(event) => {
        setMarkers((current) => [
          ...current,
          {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
          },
        ]);
      }}
      //onLoad={onMapLoad}
    >
      <Marker position={{ lat: 45.510554517171755, lng: -73.23880881420823 }} />
      <Marker position={{ lat: 45.64320516901253, lng: -73.35965842358323 }} />
      <Marker position={{ lat: 45.5423038370318, lng: -73.5999843513176 }} />
      <Marker position={{ lat: 45.39398705428811, lng: -73.39811057202073 }} />
      <Marker position={{ lat: 45.269447284136945, lng: -73.57663840405198 }} />
      <Marker position={{ lat: 45.52306396313225, lng: -73.42832297436448 }} />
      <Marker position={{ lat: 45.47782436103669, lng: -73.43793601147385 }} />
      <Marker position={{ lat: 45.53076070078878, lng: -73.61234397045823 }} />
      <Marker position={{ lat: 45.57980264702181, lng: -73.7043544685051 }} />

      {markers.map((marker) => (
        <Marker
          position={{ lat: marker.lat, lng: marker.lng }}
          //icon={{ url: "" }}
          onClick={() => {
            setSelected(marker);
            console.log(marker);
          }}
        />
      ))}
      {selected ? (
        <InfoWindow
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={() => {
            selected(null);
          }}
        >
          <div>
            <h2>Hello Buddy!</h2>
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
};

export default UserMap;
