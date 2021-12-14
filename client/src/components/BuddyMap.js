import React, { useEffect, useState, useContext, useCallback } from "react";
import styled from "styled-components";
import { UsersContext } from "./Contexts/UsersContext";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Geocode from "react-geocode";
import mapStyles from "../data/mapStyles";
import golficon from "../assets/golficon.png";
import { UsersContext } from "./Contexts/UsersContext";

Geocode.setLanguage("en");

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = { lat: 45.5017, lng: -73.5673 };

const BuddyMap = () => {
  const { users } = useContext(UsersContext);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  console.log(isLoaded, loadError);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={11}
      center={center}
      options={{ styles: mapStyles }}
    >
      {users.locatioon.map((item) => (
        <Marker
          key={item._id}
          position={{
            lat: item.location[0],
            lng: item.location[1],
          }}
        />
      ))}
    </GoogleMap>
  );
};

export default BuddyMap;
