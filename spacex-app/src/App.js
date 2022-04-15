import { useState, useEffect } from 'react';
import logo from "./assets/logo-spacex.png";
import * as API from './services/api';


export function App() {
  const [launches, setLaunches] = useState([]);
  
  useEffect(() => { 
    API.getLaunches().then(data => setLaunches(data));
  }, []);

  return  (
  <>
    <img src={logo} width={350} alt="SpaceX" />
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
