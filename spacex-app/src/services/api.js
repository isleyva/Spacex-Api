const API_URL = "https://api.spacexdata.com/v3/launches";

export async function getLaunches() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getlaunchByFlightNumber(flightNumber) {
  try {
    const response = await fetch(`${API_URL}?flight_number=${flightNumber}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
