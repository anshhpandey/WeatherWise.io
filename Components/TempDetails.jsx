import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilClouds
} from "@iconscout/react-unicons";

function TempDetails({stat}) {
  return (
    <>
      <div>

<div className="flex items-center justify-center text-xl text-cyan-300">
 <p >{stat.status}</p>
</div>




<div className="flex flex-row items-center justify-between text-white px-5">
 {/* <img
   src="http://openweathermap.org/img/wn/01d@2x.png"
   alt=""
   className="w-20"
 />
  */}
  <UilClouds  size={80} className="w-20 text-2xl"/>

 <p className="text-5xl"> 34°C</p>

 <div className="flex flex-col space-y-2 mb-4">
   <div className="flex font-light text-sm items-center justify-center">
     <UilTemperature size={18} className="mr-1" />
     Real fell :<span className="font-medium ml-1">32°C </span>
   </div>
   <div className="flex font-light text-sm items-center justify-center">
     <UilTear size={18} className="mr-1" />
     Humidity :<span className="font-medium ml-1">32°C </span>
   </div>
   <div className="flex font-light text-sm items-center justify-center">
     <UilWind size={18} className="mr-1" />
     Wind :<span className="font-medium ml-1">32°C </span>
   </div>
 </div>
</div>







</div>
<div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-7 mt-5">
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1"> 06:45 AM</span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1"> 06:45 AM</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          High: <span className="font-medium ml-1"> 06:45 AM</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          Low: <span className="font-medium ml-1"> 06:45 AM</span>
        </p>
      </div>

    </>
  );
}

export default TempDetails;
