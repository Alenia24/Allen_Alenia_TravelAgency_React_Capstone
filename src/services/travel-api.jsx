import axios from "axios";

const baseURL = "http://localhost:3001";

// Show all Trips
export const getTrips = async () => {
  // Make the URL
  const URL = `${baseURL}/trips`;
  const response = await axios.get(URL);
  return response;
};

// Show one Trip
export const getTrip = async (id) => {
  const URL = `${baseURL}/trips/${id}`;
  const response = await axios.get(URL);
  return response;
};
