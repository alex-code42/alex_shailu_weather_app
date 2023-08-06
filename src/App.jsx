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
console.log(activities)
function handleDeleteActivity(id) {
  console.log("button clicked to delete", id )
  const newactivities = activities.filter((activity) => activity.id !== id);
  setactivities(newactivities);
}

  
  const handleAddActivity = (activityInput) => {
    const newActivity ={
      id: uid(),
      activityText: activityInput.activityInput,
      isGoodWeather: isGoodWeather,

    }
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
          isGoodWeather={isGoodWeather}
          setactivities={setactivities}
          onDeleteActivity={handleDeleteActivity}/>
          <Form handleAddActivity={handleAddActivity} />
        </div>
       
    </>
  )
}
