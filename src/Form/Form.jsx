import './Form.css';
import { useState } from 'react'

export function Form({ handleAddActivity, }) {
  const [isChecked, setIsChecked] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleAddActivity(data);
    console.log(data)
    event.target.reset();
    console.log("isForGoodWeather",isForGoodWeather)
  }
  

  console.log(isChecked)
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);

    
  };
    

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <h2>Add new Activity 🥊</h2>
        <label htmlFor="textValue">Name:</label>
        <input
          type="text"
          id="activityInput"
          name="activityInput"
          className='box'
 
          
        />
      </div>
      <div className='check'>
        <label  htmlFor="checked">Good Weather Activity:</label>
        <input
          type="checkbox"
          id="isForGoodWeather"
          name="isForGoodWeather"
          className='goodweather'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <button id='pressbutton' type="submit">Add</button>
    </form>
  );
}

