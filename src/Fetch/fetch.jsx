import './fetch.css';
import { useEffect, useState } from "react";

export function WeatherList({ weather, setweather, setIsForGoodWeather, newactivities }) {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  console.log("WetterKondition in WeatherList:stimmt", weather.isGoodWeather);
  console.log("Wetter in WeatherList", weather);

  useEffect(() => {
    // Check if weather is good and set the state accordingly
    setIsForGoodWeather(weather.isGoodWeather === true);

    if (!weather.isGoodWeather) {
      document.body.classList.add("badweather");
    } else {
      document.body.classList.remove("badweather");
    }

    async function loadweather() {
      try {
        const response = await fetch(
          `https://example-apis.vercel.app/api/weather`
        );
        const data = await response.json();
        setweather(data);

        console.log(data.condition);
        console.log(data.temperature);
        setIsLoading(false); // Set loading to false when fetch completes
      } catch (error) {
        console.log(error);
        setIsLoading(false); // Set loading to false on error as well
      }
    }

    const interval = setInterval(loadweather, 3000);
    return () => clearInterval(interval);

  }, [newactivities, setIsForGoodWeather, setweather, weather.isGoodWeather]);

  console.log("WetterKondition in WeatherList:stimmt", weather.isGoodWeather);

  return (
    <div>
      {isLoading ? <h2>Loading Data...</h2> : (
        <>
          <h1>{weather.temperature} °C {weather.condition}</h1>
          {weather.isGoodWeather ? <h2>Weather is nice. Time to go out 🤽🏼‍♀️</h2> : <h2>Weather is bad. Time to stay at home 🧘‍♀️</h2>}
        </>
      )}
    </div>
  );
}
