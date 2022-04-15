import { useState, useEffect } from 'react';
import * as API from './services/api';


export function App() {
  const [launches, setLaunches] = useState([]);
  
  useEffect(() => { 
    API.getLaunches().then(data => setLaunches(data));
  }, []);

  return  (
  <>
    <h1>SpaceX Launches</h1>
    <ul>
      {launches.map(launch => (
        <li key={launch.flight_number}>
            {launch.mission_name} ({launch.launch_year})
            
        </li>
        ))}
    </ul>
  </>
  );
}

export default App;
