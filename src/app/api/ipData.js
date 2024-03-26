const baseURL = "https://geo.ipify.org/api/v2/country,city?apiKey=at_iQ4sZr0AfFCAjsiwY070lMyZL7o4u&ipAddress=";


 const getData = async (ip) => {
    try {
        const res = await fetch(baseURL+ip);
        const respons = await res.json();
        return respons;
    
    } catch (error){
        throw error;
    } 
 
 }
 
 export default getData;


  