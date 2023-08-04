import { useState } from 'react'
import './App.css'
import {Form} from "../src/Form/Form.jsx"
import { useId } from 'react';

function App() {

  const [activitys, setActivitys] =useState([])

  // function handleAcitivy(newactivity){

  //   const activityWithId = {...newactivity, id: useId()}
  //   setActivitys([...activitys, activityWithId])
    
  // }


  



  return (
    <>
        <div>
          <List/>
          <Form activitys={activitys} setActivitys={setActivitys}/>
        </div>
       
    </>
  )
}

export default App

try {
  console.log("Liste: ",activitys[1].textValue)
  console.log("Liste: ",activitys[1].checked)
} catch (error) {
  console.log(error)
}


export function List(){
  return(
    <div>
      <h2>My List</h2>
      <ul>
        {/* {activitys ?? [].map((activity, index)=>(
          <li key={index}>{activity.textValue}</li>
        ))} */}
      </ul>
    </div>

    
  )
}