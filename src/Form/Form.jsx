import React, { useState } from 'react';

export function Form({onAddActivity}) {
  const [formData, setFormData] = useState({
    name: '',
    isForGoodWeather: false,
  });
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Array", formData); 
   
    // onAddActivity(formData)

    // 
    // console.log(activities)
    

    // This will output the values to the console
    // You can use the formData object for further processing or send it to an API
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Add new Activity</h2>
      <label htmlFor="textValue">Name:</label>
      <input
        type="text"
        id="textValue"
        name="activityName"
        onChange={handleChange}
      />

      <label htmlFor="checked">Good Weather Activity:</label>
      <input
        type="checkbox"
        id="checked"
        name="weathercheckbox"
        checked={formData.checked}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

