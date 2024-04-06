import React from 'react';
import * as turf from '@turf/turf';

interface Bakery {
    id: string;
    name: string;
    lat: number;
    lng: number;
  }

interface BakeriesDistanceListProps {
  bakeries: Bakery[];
  midpoint: { lat: number; lng: number; };
}

const BakeriesDistanceList: React.FC<BakeriesDistanceListProps> = ({ bakeries, midpoint }) => {
  const midpointGeoJSON = turf.point([midpoint.lng, midpoint.lat]);

  const bakeriesWithDistance = bakeries.map(bakery => {
    const bakeryPoint = turf.point([bakery.lng, bakery.lat]);
    const distance = turf.distance(midpointGeoJSON, bakeryPoint, { units: 'kilometers' });
    return { ...bakery, distance };
  }).sort((a, b) => a.distance - b.distance);

  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Distance (km)</th>
        </tr>
      </thead>
      <tbody>
        {bakeriesWithDistance.map((bakery, index) => (
          <tr key={index}>
            <td>{bakery.name}</td>
            <td>{bakery.distance.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BakeriesDistanceList;
