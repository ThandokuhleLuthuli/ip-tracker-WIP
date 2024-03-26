'use client';
// import { MapContainer, TileLayer, useMap,Marker,Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState,useEffect} from "react";
import L from 'leaflet';


//conditionally import the components from react-leaflet 
let MapContainer, TileLayer, Marker, Popup, useMap;
if (typeof window !== 'undefined') {
    ({ MapContainer, TileLayer, Marker, Popup, useMap } = require('react-leaflet'));
    
}


export default function Map({lat,long, currentPosition}) {

  //initialise position internally using state. position takes in the state as an array
  const [position,setPosition] = useState([parseFloat(lat),parseFloat(long)]);

   //set map center
   const SetMapCenter = ({ center }) => {
    const map = useMap();
    map.setView(center, map.getZoom());
    return null;
  };
 
     
 // Update map position when lat or long changes using an effect this will run after each render
 useEffect(() => {
  // Update the position when lat or long changes
  setPosition([parseFloat(lat), parseFloat(long)]);
}, [lat, long]);

//set icon
const icon = L.icon({ iconUrl: 'https://svgshare.com/i/13MZ.svg' });


    return(
    <div className='w-full' id="map">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='w-full h-100vh'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <SetMapCenter center={position} />
      <Marker position={position} icon={icon}>
        <Popup>
          Host location:<strong>{currentPosition}</strong>
        </Popup>
    </Marker>
  </MapContainer>
        </div>);
}