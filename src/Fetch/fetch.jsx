import './fetch.css';
import { useEffect, useState } from "react";

export function WeatherList({weather, setweather, setIsForGoodWeather, newactivities}) {
  
//   function SendNews(){
//     console.log("Wetter in SendNews",weather)
//   if (weather.isGoodWeather){

//     return(<h2>Weather is nice. Time to go out 🤽🏼‍♀️</h2>)
//   }
//   else{
//     return(<h2>Weather is bad. Time to stay at home 🧘‍♀️</h2>)
//   }

// }

console.log("WetterKondition in WeatherList:stimmt",weather.isGoodWeather)
console.log("Wetter in WeatherList",weather)
if (weather.isGoodWeather === true){
  setIsForGoodWeather(true)
}
else{
  setIsForGoodWeather(false)
}


  console.log(weather.condition)

  useEffect(() => {
    async function loadweather() {
      try {
        const response = await fetch(
          `https://example-apis.vercel.app/api/weather`
        );
        const data = await response.json();
        setweather(data)
       
        console.log(weather.condition)
        console.log(weather.temperature)
      } catch (error) {
        console.log(error);
      }
    }

    loadweather();
  }, [newactivities]);
  console.log("WetterKondition in WeatherList:stimmt",weather.isGoodWeather)
  return(
    <div>
  <h1>{weather.temperature} °C {weather.condition}</h1>
  <h2>{weather.isGoodWeather ? <h2>Weather is nice. Time to go out 🤽🏼‍♀️</h2> : <h2>Weather is bad. Time to stay at home 🧘‍♀️</h2>}</h2>
  </div>)
}
