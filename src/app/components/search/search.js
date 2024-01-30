'use client';
import Summary from "../summary/summary";
import Map from "../map/map";
import getData from "../../api/ipData";
import { useState,useEffect} from "react";


export default function Search() {
     
const [ip,setIp] = useState("");
const [data,setData] = useState("");




 const handleInputChange = (e) => {
    setIp(e.target.value);
 }


const getIpData = async () => {
    try {
        const payload = await getData(ip);
        setData(payload);
        console.table(payload);

    } catch (error){
        console.log(error.message);
    }   
 }

//get all data after component has rendered
 useEffect(()=> {
    getIpData();
  },[]);


 const handleSubmit = async (e) => {
    e.preventDefault();
    await getIpData();
   
}



    return (<>
        <div className="max-w-3xl w-full flex flex-nowrap flex-col items-center">
            <h1 className="text-3xl font-bold pb-5 text-very-dark-grey">IP Address Tracker</h1>
            <form className="pb-9 flex" onSubmit={handleSubmit}>
                <label className="w-full block">
                    <input type="text" onChange={handleInputChange} className="text-lg text-very-dark-grey p-5 rounded-l-xl  block"/>
                </label>
                <button className="inline-block p-5 bg-very-dark-grey rounded-r-xl text-white" type="submit">X</button>
            </form>
            
            {data && data.location.country ? (<p>Country: {data.location.country}</p>) : (<p>No country data</p>)}
            
            <Summary ipAddress={data.ip} isp={data.isp} country={data && data.location.region ? data.location.region: "Country data not available"} timeZone={data && data.location.timezone ? data.location.timezone: "timezone data not available"}/>
            <Map lat={data && data.location.lat ? data.location.lat : "51.505"} long={data && data.location.lng ? data.location.lng : "-0.09"}/>
        </div>
    </>)}
