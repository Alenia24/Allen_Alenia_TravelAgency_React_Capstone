import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTrip } from '../../services/travel-api';
import Navigation from '../../components/Navigation/Navigation';

import "./DestinationItem.css"
export default function DestinationItem() {
    const [trip, setTrip] = useState({})
    const { id } = useParams();

    useEffect(() => {
        getTrip(id).then((res) => setTrip(res.data))
    }, [])
  return (
    <div>
      <Navigation />
      <div className="trip-container">
        <img className='img-fluid' src={trip.imageURL} alt={trip.location} />
        <div className="trip-details">
          <h1>{trip.title}</h1>
          <p><span>Location:</span> {trip.location}</p>
          <p><span>Description:</span> {trip.description}</p>
          <p><span>Date:</span> {trip.date}</p>
          <p><span>Duration:</span> {trip.duration} Days</p>
          <p><span>Trip Type:</span> {trip.type}</p>
          <p><span>Price:</span> ${trip.price}</p>
          <button className='book-now-btn'>Book Now</button>
        </div>
        
        
      </div>
      <div>
        
      </div>
    </div>
  );
}
