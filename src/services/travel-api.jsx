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

// Get reviews for a trip by id
export const getTripReviews = async (id) => {
  const URL = `${baseURL}/reviews/${id}`;
  const response = await axios.get(URL);
  return response;
};

// Post a review
export const postTripReview = async (tripId, review) => {
  const URL = `${baseURL}/reviews/${tripId}`;
  const response = await axios.post(URL, review);
  return response;
};

// Post a login
export const postLogin = async (loginData) => {
  const URL = `${baseURL}/auth/login`;
  const response = await axios.post(URL, loginData);
  return response;
};
