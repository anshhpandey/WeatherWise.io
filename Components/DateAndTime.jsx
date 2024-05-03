import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilClouds,
  UilMoon
  
} from "@iconscout/react-unicons";

function DateAndTime({ stats }) {

  // console.log(stats)
  // console.log(stats)
  return (
    <>
      <div >
        <div className="flex items-center justify-center my-6 ">
          <p className="text-white text-xl">
            Today, {stats.time.slice(0, 10)} | Time : {stats.time.slice(11, 16)}
          </p>
        </div>



        <div className="flex items-center justify-around py-7 border border-white temp">
          <div>
            <p className="text-5xl text-white"> {stats.temp}°C</p>
            <p className="text-white">({stats.status})</p>
          </div>


          <div className="flex items-center">
            
          {
          
          stats.isDay !== 0 ? (
              <UilClouds size={80} style={{ color: 'white' }} />
            ) : (
              <UilMoon size={80} style={{ color: 'white' }} />
            )}
          <p className="text-white text-3xl font-medium">{stats.place}</p>
          </div>



          <div className="text-white">
            <div className="flex flex-row items-center justify-between text-white px-5"></div>

            <div className="flex flex-col space-y-2 mb-4">
              <div className="flex font-light text-sm items-center justify-center">
                <UilTemperature size={18} className="mr-1" />
                Real feel :
                <span className="font-medium ml-1">{stats.feels}°C </span>
              </div>
              <div className="flex font-light text-sm items-center justify-center">
                <UilTear size={18} className="mr-1" />
                Humidity :
                <span className="font-medium ml-1">{stats.humidity}%</span>
              </div>
              <div className="flex font-light text-sm items-center justify-center">
                <UilWind size={18} className="mr-1" />
                Wind :
                <span className="font-medium ml-1">{stats.wind} km/h </span>
              </div>
              <div className="flex font-light text-sm items-center justify-center">
                <UilWind size={18} className="mr-1" />
                Pressure :
                <span className="font-medium ml-1">{stats.pressure} in </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DateAndTime;
