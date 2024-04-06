import React, { useEffect, useState } from 'react';
import { Polyline } from 'react-leaflet';
import { Itinerary } from '../utils/api';

interface ItineraireProps {
  point1: { lat: number; lng: number };
  point2: { lat: number; lng: number };
  profile: 'foot-walking' | 'driving-car';
}

const Itineraire: React.FC<ItineraireProps> = ({ point1, point2, profile }) => {
  const [directions, setDirections] = useState<any[]>([]);

  const polylineColor = profile === 'foot-walking' ? 'purple' : 'green';

  useEffect(() => {
    const fetchDirections = async () => {
      try {
        const data = await Itinerary({
          start: { lat: point1.lat, lng: point1.lng },
          end: { lat: point2.lat, lng: point2.lng },
          profile,
        });
        if (data && data.features) {
          setDirections(data.features[0].geometry.coordinates);
        }
      } catch (error) {
        console.error('Failed to fetch directions', error);
      }
    };

    fetchDirections();
  }, [point1, point2, profile]);

  return (
    <>
      {directions.length > 0 && (
        <Polyline positions={directions.map(([lng, lat]) => [lat, lng])} color={polylineColor} />
      )}
    </>
  );
};

export default Itineraire;
