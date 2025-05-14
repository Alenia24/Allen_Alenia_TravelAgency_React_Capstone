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

// Post a register
export const postRegister = async (registerData) => {
  const URL = `${baseURL}/auth/register`;
  const response = await axios.post(URL, registerData);
  return response;
};

// Post a logout
export const postLogout = async (logoutData) => {
  const URL = `${baseURL}/auth/logout`;
  const response = await axios.post(URL, logoutData);
  return response;
};

// Update a trip
export const updateTrip = async (id, tripData) => {
  const token = localStorage.getItem("accessToken");
  const URL = `${baseURL}/trips/${id}`;
  const response = await axios.put(URL, tripData, {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

// Delete a trip
export const deleteTrips = async (id) => {
  const token = localStorage.getItem("accessToken");
  const URL = `${baseURL}/trips/${id}`;
  const response = await axios.delete(URL, {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

// Create a trip
export const createTrips = async (trip) => {
  const token = localStorage.getItem("accessToken");
  const URL = `${baseURL}/trips`;
  const response = await axios.post(URL, trip, {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

// Create a booking
export const createBookings = async (id, bookingData) => {
  const URL = `${baseURL}/bookings/${id}`;
  const response = await axios.post(URL, bookingData);
  return response;
};
