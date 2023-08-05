

export function Form({ onAddActivity }) {

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
    console.log(data)

  }
    

  return (
    <form onSubmit={handleSubmit}>
        <h2>Add new Activity</h2>
      <label htmlFor="textValue">Name:</label>
      <input
        type="text"
        id="activityInput"
        name="activityInput"
        
      />

      <label htmlFor="checked">Good Weather Activity:</label>
      <input
        type="checkbox"
        id="isForGoodWeather"
        name="isForGoodWeather"
        
      />

      <button type="submit">Submit</button>
    </form>
  );
}

