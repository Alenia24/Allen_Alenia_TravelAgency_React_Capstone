import axios from "axios";

const baseURL = "http://localhost:3001";

// Show all Trips
export const getTrips = async () => {
  // Make the URL
  const URL = `${baseURL}/${trips}`;
  const response = await axios.get(URL);
  return response;
};
