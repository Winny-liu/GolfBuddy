import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import Geocode from "react-geocode";
import mapStyles from "../data/mapStyles";

Geocode.setLanguage("en");

const mapContainerStyle = {
  width: "40vw",
  height: "50vh",
};

const center = { lat: 45.5017, lng: -73.5673 };

const UserMap = ({ location, setLocation }) => {
  const { isLoaded, loadError } = useLoadScript({
    language: "en",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const [markers, setMarkers] = useState([]);

  console.log(isLoaded, loadError);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={11}
      center={center}
      options={{ styles: mapStyles, disableDefaultUI: true }}
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
