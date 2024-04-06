import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import * as turf from '@turf/turf';

interface Point {
  lat: number;
  lng: number;
}

interface LineProps {
  point1: Point;
  point2: Point;
}

const Line: React.FC<LineProps> = ({ point1, point2 }) => {
  const map = useMap();

  React.useEffect(() => {
    const line = turf.lineString([[point1.lng, point1.lat], [point2.lng, point2.lat]]);
    const layer = L.geoJSON(line as any).addTo(map);

    return () => {
      layer.remove();
    };
  }, [map, point1, point2]);

  return null;
};

export default Line;
