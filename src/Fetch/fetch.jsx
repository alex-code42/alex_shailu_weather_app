import './fetch.css';
import { useEffect, useState } from "react";

export function WeatherList({weather, setweather, newactivities}) {
  
  function SendNews(){
  if (weather.isGoodWeather){
    console.log(weather.isGoodWeather)
    return(<h2>Time to go out 🤽🏼‍♀️</h2>)
  }
  else{
    return(<h2>Time to stay at home 🧘‍♀️</h2>)
  }
  if (weather.condition = true){
    setIsForGoodWeather("on")
  }
  else{
    setIsForGoodWeather(undefined)
  }
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

  return(
    <div>
  <h1>{weather.temperature} °C {weather.condition}</h1>
  <h2><SendNews/></h2>
  </div>)
}
