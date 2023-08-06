import './fetch.css';
import { useEffect, useState } from "react";

export function WeatherList({weather, setweather, newactivities}) {
  
 

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

  return(<h1>{weather.temperature} °C {weather.condition}</h1>)
}
