import { useState } from 'react'
import './App.css'
import {Form} from "../src/Form/Form.jsx"
import { uid } from 'uid';
import useLocalStorageState from "use-local-storage-state";
// import { List } from './List';

export default function App() {

  const [activities, setactivities] = useState([]);

  console.log("App-Activities",activities)
  const handleAddActivity = (activity) => {
    setactivities([...activities, activity]);
  };

  return (
    <>
        <div>
          <Form onAddActivity={handleAddActivity} />
        </div>
       
    </>
  )
}
