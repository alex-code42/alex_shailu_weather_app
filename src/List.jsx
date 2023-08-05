import './List.css';

export function List({ activities, isGoodWeather}) {
    
    return (
      <div>
        <h2>List of Activities</h2>
        <ul>
            {activities.filter(activity => activity.isForGoodWeather === isGoodWeather).map((activity, index) => (
            <li className="list" key={index}>
              <p>{activity.activityInput}</p>
              {/* <p>Good Weather Activity: {activity.weathercheckbox ? 'Yes' : 'No'}</p> */}
            </li>
          ))}
        </ul>
      </div>
    );
  }