import { useState } from 'react'
import './App.css'
import {Form} from "../src/Form/Form.jsx"
import { uid } from 'uid';
import {WeatherList} from "../src/Fetch/fetch.jsx"

import useLocalStorageState from "use-local-storage-state";
import { List } from './List';
// import { List } from './List';

export default function App() {
  const [weather, setweather] = useState([]);
  const [isGoodWeather, setIsGoodWeather] = useState("on");
  const [activities, setactivities] = useLocalStorageState('todos', {
    defaultValue: []
})

  
  const handleAddActivity = (activity) => {
    setactivities([...activities, activity]);
    
  };

  return (
    <>
        <div>
          <h1>The Classy Weather App 🌻</h1>
          <WeatherList weather={weather} setweather={setweather}/>
          <List activities={activities} isGoodWeather={isGoodWeather}/>
          <Form onAddActivity={handleAddActivity} />
        </div>
       
    </>
  )
}
