import './List.css';

export function List({ activities,isForGoodWeather, onDeleteActivity}) {


    console.log("Activities_List", activities)
    console.log("isForGoodWeather",isForGoodWeather)
    
    // isForGoodWeather = undefined;
    console.log("isForGoodWeather",isForGoodWeather)

    return (
      <div>
        <h2>List of Activities</h2>
        <ul>
            {activities.filter(activity => activity.isForGoodWeather === isForGoodWeather).map((activity, id) => (
            <li className="list" key={id}>
              <p>{activity.activityText}</p>
              {/* <p>Good Weather Activity: {activity.weathercheckbox ? 'Yes' : 'No'}</p> */}
              <button name="horst" className='buttonToDelete' type="button" onClick={() => onDeleteActivity(activity.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }