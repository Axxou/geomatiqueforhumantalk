import React from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';

interface Point {
  lat: number;
  lng: number;
}

interface PointsAffichesProps {
  point1: Point;
  point2: Point;
}

const icon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const PointsAffiches: React.FC<PointsAffichesProps> = ({ point1, point2 }) => {
  return (
    <>
      <Marker position={point1} icon={icon} />
      <Marker position={point2} icon={icon} />
    </>
  );
};

export default PointsAffiches;
