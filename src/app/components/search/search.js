'use client';
import Summary from "../summary/summary";
import Map from "../map/map";
import getData from "../../api/ipData";
import { useState,useEffect} from "react";
import Image from 'next/image';
import arrowIcon from '../../assets/images/icon-arrow.svg';
// import iconArrow from "../../assets/images/icon-arrow.svg"; 


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
        // console.table(payload)
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
        <div className="w-full flex flex-nowrap flex-col items-center">
            <div className="w-full flex flex-col items-center bg-hero-background-desktop bg-no-repeat bg-cover py-20 px-4 md:p-24">
                <h1 className="text-2xl md:text-3xl font-bold pb-5  text-white">IP Address Tracker</h1>
                <form className="pb-9 w-full flex max-w-screen-sm" onSubmit={handleSubmit}>
                    <label className="w-full block">
                        <input type="text" onChange={handleInputChange} className="text-lg text-very-dark-grey p-5 rounded-l-xl w-full block" placeholder="Search for any IP address or domain"/>
                    </label>
                    <button className="inline-block p-5 bg-very-dark-grey rounded-r-xl text-white" type="submit"><Image src={arrowIcon} alt="submit button" width={25} height={25}/></button>
                </form>
            </div>
            <Summary ipAddress={data.ip} isp={data.isp} country={data && data.location.region ? data.location.region: "Country data not available"} timeZone={data && data.location.timezone ? data.location.timezone: "timezone data not available"}/>
            <Map lat={data && data.location.lat ? data.location.lat : "51.505"} long={data && data.location.lng ? data.location.lng : "-0.09"} currentLocation={data && data.location.country ? data.location.country : "UK"} currentPosition={data && data.location.region ? data.location.region: "Country data not available" } />
        </div>
    </>)}
    