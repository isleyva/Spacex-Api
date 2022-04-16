import { useState, useEffect } from 'react';
import {Box, Heading, Image, Flex, Text, Spacer, Tag } from '@chakra-ui/react';
import logo from "./assets/logo-spacex.png";
import * as API from './services/api';
import {HiCalendar} from 'react-icons/hi';


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
          <Flex display="flex">
            <Text fontSize="2xl">
              Mission <strong>{launch.mission_name}</strong> 
               ({launch.launch_year})
            </Text>
          <Spacer/>
          <Tag p={4} colorScheme={launch.launch_success ? 'green' : 'red'}>
            {launch.launch_success ? 'Success' : 'Failed'}
          </Tag>
          </Flex> 
          <Flex align="center">
            <HiCalendar/>
            {" "}
            <Text fontSize="sm" ml={2}>{launch.launch_date_local}</Text>
          </Flex>  
        </Box>
        ))}
    </section>
  </>
  );
}

export default App;
