import React, { useEffect, useState, useContext } from "react";
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
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState();
  const { users, usersStatus } = useContext(UsersContext);
  const [zipCodeUser, setZipCodeUser] = useState(users);

  useEffect(() => {
    fetch(`/api/users`)
      .then((res) => res.json())
      .then((data) => {
        setZipCodeUser(data.data);
      });
  }, []);

  console.log(users);

  //const address = `${ user:zipCode }`
  Geocode.fromAddress("address").then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );
  //console.log(isLoaded, loadError);
  //const onMapClick = React.useCallback((event) => {
  // setMarkers((current) => [
  //...current,
  // {
  // lat: event.latLng.lat(),
  //  lng: event.latLng.lng(),
  // },
  //]);
  //}, []);

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
      // onClick={(event) => {
      // setMarkers((current) => [
      //  ...current,
      //  {
      //   lat: event.latLng.lat(),
      //   lng: event.latLng.lng(),
      // },
      // ]);
      // }}
      // onLoad={onMapLoad}
    >
      {/*{markers.map((marker) => (
        <Marker
          //position={{ lat: marker.lat, lng: marker.lng }}
          //icon={{ url: "" }}
          onClick={() => {
            setSelected(marker);
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
        ) : null}*/}
    </GoogleMap>
  );
};

export default UserMap;
