import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import * as turf from '@turf/turf';

interface Point {
  lat: number;
  lng: number;
}

interface MidpointProps {
  point1: Point;
  point2: Point;
}

const Midpoint: React.FC<MidpointProps> = ({ point1, point2 }) => {
  const map = useMap();

  React.useEffect(() => {
    const icon = new L.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    const points = turf.points([[point1.lng, point1.lat], [point2.lng, point2.lat]]);
    const midpoint = turf.midpoint(points.features[0].geometry.coordinates, points.features[1].geometry.coordinates);
    const midpointMarker = L.marker([midpoint.geometry.coordinates[1], midpoint.geometry.coordinates[0]], {icon}).addTo(map);

    return () => {
      midpointMarker.remove();
    };
  }, [map, point1, point2]);

  return null;
};

export default Midpoint;
