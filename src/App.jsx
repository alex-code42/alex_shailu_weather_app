import { useState } from 'react'
import './App.css'
import {Form} from "../src/Form/Form.jsx"
import { uid } from 'uid';
import useLocalStorageState from "use-local-storage-state";
// import { List } from './List';

function App() {

  const [activities, setactivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });


 function handleAddActivty({activityInput, isForGoodWeather}){
    const newActivity ={
      activityText: activityInput,
      isForGoodWeather: isForGoodWeather
    };

    setactivities ([...activities, newActivity]);
  };

  return (
    <>
        <div>
          <Form handleAddActivity={handleAddActivty} />
        </div>
       
    </>
  )
}

export default App