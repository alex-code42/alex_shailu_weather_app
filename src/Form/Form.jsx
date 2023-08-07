import './Form.css';

export function Form({ handleAddActivity }) {
  
  function handleSubmit(event) {
    event.preventDefault();

    const isForGoodWeather = event.target.elements.isForGoodWeather.checked
    const textTitle = event.target.elements.activityInput.value
    const data = {
      textTitle: textTitle.toUpperCase(),
      isForGoodWeather: isForGoodWeather,
    }
    handleAddActivity(data);
    event.target.reset();
    console.log("isForGoodWeather",isForGoodWeather)
  }
  


    

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
          // checked={isChecked}
          // onChange={handleCheckboxChange}
        />
      </div>
      <button id='pressbutton' type="submit">Add</button>
    </form>
  );
}

