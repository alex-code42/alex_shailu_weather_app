import './List.css';

export function List({ activities, isGoodWeather, onDeleteActivity}) {


  console.log("activities",activities[0].id)

    return (
      <div>
        <h2>List of Activities</h2>
        <ul>
            {activities.filter(activity => activity.isGoodWeather === isGoodWeather).map((activity, id) => (
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