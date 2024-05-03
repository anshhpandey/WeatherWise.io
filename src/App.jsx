import DateAndTime from "../Components/DateAndTime";
import Inputs from "../Components/Inputs";
import TopButtons from "../Components/TopButtons";
import "./index.css";
import "./App.css";
// import TempDetails from "../Components/TempDetails";
import Forecast from "../Components/Forecast";
import Header from "../Components/Header";
import { useEffect, useState } from "react";

function App() {
  const city = [
    {
      id: 1,
      title: "Indore",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 3,
      title: "Pune",
    },
    {
      id: 4,
      title: "Delhi",
    },
    {
      id: 5,
      title: "Kolkata",
    },
  ];
  const [cityName, setCityName] = useState("Barwani");
  const [weatherData, setWeatherData] = useState(null);

  console.log(weatherData);

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=04ea3a2cacb1401592160726240205&q=${cityName}&aqi=no`;

  // const apiUrlLoc = `https://api.weatherapi.com/v1/current.json?key=04ea3a2cacb1401592160726240205&q=${lat,lon}&aqi=no`

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [cityName]);

  return (
    <div className="mx-auto max-w-screen  mt-0 py-7  h-screen w-full shadow-xl shadow-gray-400 bg-slate-900 main">
      <Header />

      <TopButtons setCityName={setCityName} />

      <Inputs setCityName={setCityName} />

      {weatherData && (
        <DateAndTime
          stats={{
            place: weatherData.location.name,
            region: weatherData.location.region,
            temp: weatherData.current.temp_c,
            feels: weatherData.current.feelslike_c,
            isDay: weatherData.current.isDay,
            humidity: weatherData.current.humidity,
            wind: weatherData.current.wind_kph,
            status: weatherData.current.condition.text,
            time: weatherData.location.localtime,
            pressure: weatherData.current.pressure_in,
          }}
        />
      )}
    </div>
  );
}

export default App;
