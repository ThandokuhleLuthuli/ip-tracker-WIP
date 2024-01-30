import { MapContainer, TileLayer, useMap,Marker,Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState,useEffect} from "react";


export default function Map({lat,long}) {

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

    return(
    <div className='w-900' id="map">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='w-full h-500'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <SetMapCenter center={position} />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
    </Marker>
  </MapContainer>
        </div>);
}