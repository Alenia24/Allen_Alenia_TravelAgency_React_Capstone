import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTrip, getTripReviews } from '../../services/travel-api';
import Navigation from '../../components/Navigation/Navigation';
import TripDetails from '../../components/TripDetails/TripDetails';

import "./DestinationItem.css"
import TripReviews from '../../components/TripReviews/TripReviews';
import PostReview from '../../components/PostReview/PostReview';

export default function DestinationItem() {
    const [trip, setTrip] = useState({})
    const [reviews, setReviews] = useState([])
    const { id } = useParams();

    useEffect(() => {
        getTrip(id).then((res) => setTrip(res.data))
    }, [])

    useEffect(() => {
        getTripReviews(id).then((res) => setReviews(res.data))
    })

  return (
    <div>
      <Navigation />
      <TripDetails trip= {trip} />
      <PostReview id = {id}/>
      <TripReviews reviews = {reviews} />
    </div>
  );
}
