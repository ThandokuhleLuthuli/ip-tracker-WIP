import {createContext,useState} from 'react';


export const coordinatesContext = createContext({ latitude: "51.505",
longetude: "-0.09",
setLatitude: () => {},
setLongetude: () => {},
});

const MyContextProvider = ({ children }) => {
    const [latitude,setLatitude] = useState("51.505");
    const [longetude,setLongetude] = useState("-0.09");
  
    return (
      <coordinatesContext.Provider value={{latitude,setLatitude,longetude,setLongetude}}>
        {children}
      </coordinatesContext.Provider>
    );
  };

  export default MyContextProvider;


