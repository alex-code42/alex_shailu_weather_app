import './Form.css';
import { useState } from 'react'

export function Form({ onAddActivity }) {

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
    console.log(data)
    event.target.reset();

  }
  const [isChecked, setIsChecked] = useState(false);

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
          checked={isChecked}
          onChange={handleCheckboxChange}
          
        />
      </div>
      <div className='check'>
        <label  htmlFor="checked">Good Weather Activity:</label>
        <input
          type="checkbox"
          id="isForGoodWeather"
          name="isForGoodWeather"
          className='goodweather'

        />
      </div>
      <button id='pressbutton' type="submit">Add</button>
    </form>
  );
}

