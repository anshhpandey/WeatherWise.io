import { UilSearch } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";

import React, { useState } from "react";

const Inputs = ({setCityName}) => {

  const [input, setInput] = useState('')

  const handleCityName = (e) => {
        setInput(e.target.value)
       
  }

  const handleLocation = () => {
    
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log(lat, lon);
    
            // Make API request using lat and lon
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=04ea3a2cacb1401592160726240205&q=${lat},${lon}&aqi=no`;
            fetch(apiUrl)
              .then((response) => {
                if (!response.ok) {
                  throw new Error('Error');
                }
                return response.json();
              })
              .then((data) => {
                console.log(data);
                
                setCityName(data.location.name); 
              })
              .catch((error) => {
                console.error('Error fetching data:', error);
              });
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };
    


  const handleSubmit = (e)=>{
    e.preventDefault();
    setCityName(input)
    setInput('')
    // console.log(input)
  }
  return (
    <>
      <div className="flex flex-row justify-center my-6 inp">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <form onSubmit={handleSubmit}   className="flex flex-row w-3/4 items-center justify-center space-x-4 rounded-xl">
        <input
          type="text"
          placeholder="Search Cities ..."
          className=" p-2 w-full rounded-xl shadow-xl focus:outline-none capitalize "
          onChange={handleCityName}
          value={input}
          style={{ borderRadius: '.8rem' }}

        />

<button type="submit" className="text-white cursor-pointer transition ease-out hover:scale-125">
              <UilSearch size={35} />
            </button>
        </form>
        <button  onClick={handleLocation}> 
        <UilLocationPoint
            
          size={35}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        </button>
      </div>

      {/* <div className="flex flex-row w-1/4 items-center justify-center">
           <button name="matric" className=" text-xl text-white">
                 °C
           </button>

           <p className="text-xl text-white mx-1">
              | 
           </p>

           <button name="imperial" className="text-xl text-white ">
           °F
           </button>
      </div> */}

    </div>

    </>
  );
};

export default Inputs;
