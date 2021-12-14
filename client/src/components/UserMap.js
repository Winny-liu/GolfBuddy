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

//import "@reach/combobox/styles.css";
import Geocode from "react-geocode";
import mapStyles from "../data/mapStyles";
import golficon from "../assets/golficon.png";

Geocode.setLanguage("en");

const mapContainerStyle = {
  width: "50vw",
  height: "50vh",
};

const center = { lat: 45.5017, lng: -73.5673 };
const options = {
  // styles: mapContainerStyle,
  //disableDefaultUI: true,
};

const UserMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const [markers, setMarkers] = useState([]);

  const [location, setLocation] = useState();

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
      zoom={11}
      center={center}
      options={{ styles: mapStyles }}
      onClick={(event) => {
        setMarkers((current) => [
          ...current,
          {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
          },
        ]);
      }}
      //onLoad={onMapLoad}*/}
    >
      {markers.map((marker) => (
        <Marker
          position={{ lat: marker.lat, lng: marker.lng }}
          //icon={{ url: "/golficon.png",scaledSize: new window.google.maps.Size(1000,1000) }}
          onClick={() => {
            setLocation(marker);
            console.log(marker);
          }}
        />
      ))}
      {location ? (
        <InfoWindow
          position={{ lat: location.lat, lng: location.lng }}
          onCloseClick={() => {
            setLocation(null);
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
