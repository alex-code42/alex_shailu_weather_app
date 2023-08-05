import { useEffect, useState } from "react";

export function WeatherList() {
  const [weather, setweather] = useState([]);
 

  console.log(weather)

  useEffect(() => {
    async function loadweather() {
      try {
        const response = await fetch(
          `https://example-apis.vercel.app/api/weather`
        );
        const weather = await response.json();
        console.log(weather);
       
        console.log(weather)
      } catch (error) {
        console.log(error);
      }
    }

    loadweather();
  }, []);
  return(<h1>Hallo</h1>)
}
