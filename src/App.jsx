import { useState } from 'react'
import './App.css'
import {Form} from "../src/Form/Form.jsx"
import { uid } from 'uid';

import useLocalStorageState from "use-local-storage-state";
import { List } from './List';
// import { List } from './List';

export default function App() {

  const [activities, setactivities] = useLocalStorageState('todos', {
    defaultValue: []
})

  console.log("App-Activities",activities)
  const handleAddActivity = (activity) => {
    setactivities([...activities, activity]);
  };

  return (
    <>
        <div>
          <h1>The Classy Weather App 🌻</h1>
          <List activities={activities}/>
          <Form onAddActivity={handleAddActivity} />
        </div>
       
    </>
  )
}
