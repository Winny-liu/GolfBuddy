import React, { useState } from "react";
import styled from "styled-components";
import UserMap from "./UserMap";
import { Marker} from "@react-google-maps/api";
    



const SignUpmap = () =>{
    const [marker, setMarker] = useState([]);
  const [selected, setSelected] = useState();

    return (
        <>
         <Confirm>Please double click on the map to confirm your Location</Confirm>
        <UserMap
        onClick={(event) => {
            setMarker((current) => [
              ...current,
              {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
              },
            ])  
        }}
        />
        <Marker 
        
        position={{ lat: marker.lat, lng: marker.lng }}
        onClick={() => {
            setSelected(marker);
            console.log(marker)

        }}
        />
       
        </>
    )
}
const Confirm = styled.div`
font-size:30px;
display: flex;
justify-content: center;
  align-items: center;
  color:#ff6164;


`

export default SignUpmap;