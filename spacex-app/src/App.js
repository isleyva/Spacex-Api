import { useState, useEffect } from 'react';
import {Box, Heading, Image} from '@chakra-ui/react';
import logo from "./assets/logo-spacex.png";
import * as API from './services/api';


export function App() {
  const [launches, setLaunches] = useState([]);
  
  useEffect(() => { 
    API.getLaunches().then(data => setLaunches(data));
  }, []);

  return  (
  <>
    <Image m={4} src={logo} width={350} alt="SpaceX" />
    <Heading as="h1" size="xl" m={4}>
      SpaceX Launches
    </Heading>
    <section>
      {launches.map(launch => (
        <Box key={launch.flight_number} 
        bg="gray.100" 
        p={4} 
        m={4} 
        borderRadius="lg"
        >
            {launch.mission_name} ({launch.launch_year})   
        </Box>
        ))}
    </section>
  </>
  );
}

export default App;
