import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTrip } from '../../services/travel-api';
import Navigation from '../../components/Navigation/Navigation';
import TripDetails from '../../components/TripDetails/TripDetails';

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
      <TripDetails trip= {trip} />
    </div>
  );
}
