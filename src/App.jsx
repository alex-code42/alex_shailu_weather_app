import { useState } from 'react'
import './App.css'
import {Form} from "../src/Form/Form.jsx"
import { uid } from 'uid';
// import { List } from './List';

function App() {

  const [activities, setActivities] =useState([])

  function handleAddActivity(){
    const newActivityWithID = {id: uid(),...activities}
    setactivities([...activities,newActivityWithID])

  }
  console.log(activities);

  return (
    <>
        <div>
          <Form onAddActivity={activities} handleAddActivity={handleAddActivity}/>
        </div>
       
    </>
  )
}

export default App