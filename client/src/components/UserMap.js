import React from "react";
import styled from "styled-components";
import { UsersContext } from "./Contexts/UsersContext";

const UserMap = () => {
  return null;
};

export default UserMap;

 // Initialize and add the map
 function initMap() {
  // The location of Uluru
  const uluru = { lat: 45.5017, lng: 73.5673 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.createElementById("map"), {
    
    zoom: 8,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const addMarker = (users) =>{}
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });

  const infoWindow = new google.maps.infoWindow({
    content: "<h3>{user.name}</h3>"
  })
}
 return (

  <MapwithMarker></MapwithMarker>
 )


src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAQslJk3dMCME-TYVuHiAKRhCRFALSQMQ&callback=initMap&libraries=&v=weekly"
async
