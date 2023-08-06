import { useState, useEffect } from 'react'
import './App.css'
import {Form} from "../src/Form/Form.jsx"
import { uid } from 'uid';
import {WeatherList} from "../src/Fetch/fetch.jsx"

import useLocalStorageState from "use-local-storage-state";
import { List } from './List';
// import { List } from './List';

export default function App() {
  const [weather, setweather] = useState([]);
  const [isForGoodWeather, setIsForGoodWeather] = useState("on");
  const [isChecked, setIsChecked] = useState(false);
  const [activities, setactivities] = useLocalStorageState('todos', {
    defaultValue: []
})
console.log(activities)
function handleDeleteActivity(id, isChecked) {
  console.log("button clicked to delete", id )
  const newactivities = activities.filter((activity) => activity.id !== id);
  setactivities(newactivities);
}

useEffect(() => {
  if (weather.condition = true){
    setIsForGoodWeather("on")
  }
  else{
    setIsForGoodWeather(undefined)
  }
},[weather.temperature])
console.log(weather.temperature)

console.log("isChecked",isChecked)
  const handleAddActivity = (activityInput, isForGoodWeather) => {
    console.log("isChecked",isForGoodWeather)
    const newActivity ={
      id: uid(),
      activityText: activityInput.activityInput,
      isForGoodWeather: activityInput.isForGoodWeather,

    }
    console.log("isForGoodWeather",isForGoodWeather)
    console.log(activityInput.activityInput)
    setactivities([...activities, newActivity]);

    
  };

  return (
    <>
        <div>
          <h1>The Classy Weather App</h1>
          <WeatherList weather={weather} setweather={setweather}/>
          <List 
          activities={activities} 
          weather={weather}
          isForGoodWeather={isForGoodWeather}
          setactivities={setactivities}
          onDeleteActivity={handleDeleteActivity}/>
          <Form handleAddActivity={handleAddActivity} />
        </div>
       
    </>
  )
}
