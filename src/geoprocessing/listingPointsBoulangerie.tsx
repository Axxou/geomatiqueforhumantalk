import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import bakery_icon from "../assets/dataset/img/bakery-icon.png"

interface Bakery {
    id: string;
    name: string;
    lat: number;
    lng: number;
  }

interface BakeryPointsProps {
  bakeries: Bakery[];
}

const bakeryIcon = L.icon({
  iconUrl: bakery_icon,
  iconSize: [30, 40],
});

const BakeryPoints: React.FC<BakeryPointsProps> = ({ bakeries }) => {
  return (
    <>
      {bakeries.map(bakery => (
        <Marker
          key={bakery.id}
          position={[bakery.lat, bakery.lng]}
          icon={bakeryIcon}
        >
          <Popup>{bakery.name}</Popup>
        </Marker>
      ))}
    </>
  );
};

export default BakeryPoints;
