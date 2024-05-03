const API_KEY = "64d00d008519fc53de2b87f8f5ec0036"
const BASE_URL = "https://api.openweathermap.org/data/2.5"


const getWeatherData = (infoType, searchParams) => {

    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})

    return fetch(url)
    .then((res)=>res.json())
    .then((data)=>data);

}

export default getWeatherData;