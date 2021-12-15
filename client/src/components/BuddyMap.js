/* eslint-disable no-undef */
/* global google */
import golficon2 from "../assets/golficon2.webp";
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
import { red } from "@mui/material/colors";

Geocode.setLanguage("en");

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = { lat: 45.5017, lng: -73.5673 };

const BuddyMap = () => {
  const { users } = useContext(UsersContext);
  const { isLoaded, loadError } = useLoadScript({
    language: "en",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [selectedUser, setSelectedUser] = useState(null);

  console.log(isLoaded, loadError);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  console.log(users);

  return (
    <>
      <Img src={golficon2} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
        options={{ styles: mapStyles }}
      >
        {users &&
          users.map((user) => {
            console.log(selectedUser);
            const hasLocation =
              user.location && user.location.lat && user.location.lng;
            if (hasLocation) {
              return (
                <Marker
                  key={user._id}
                  position={{
                    lat: user.location.lat,
                    lng: user.location.lng,
                  }}
                  icon={{
                    url: golficon,
                    scaledSize: new google.maps.Size(30, 30),
                    fillColor: "red",
                  }}
                  onClick={() => {
                    setSelectedUser(user);
                  }}
                />
              );
            } else {
              return null;
            }
          })}
        {selectedUser && (
          <InfoWindow
            position={{
              lat: selectedUser.location.lat,
              lng: selectedUser.location.lng,
            }}
            onCloseClick={() => {
              setSelectedUser(null);
            }}
          >
            <div>
              <h1>{selectedUser.name}</h1>
              <h2>Handicap:{selectedUser.handicap}</h2>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  );
};

const Img = styled.img`
  width: 190px;
  height: 160px;
  overflow: hidden;
  object-fit: cover;
  position: absolute;
  top: 100px;
  left: 10px;
  z-index: 1;
  border: solid;
`;

export default BuddyMap;
