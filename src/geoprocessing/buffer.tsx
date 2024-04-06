import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import * as turf from '@turf/turf';

interface Point {
  lat: number;
  lng: number;
}

interface MidpointBufferProps {
  point1: Point;
  point2: Point;
  radius: number;
}

const MidpointBuffer: React.FC<MidpointBufferProps> = ({ point1, point2, radius }) => {
  const map = useMap();

  React.useEffect(() => {
    const midpoint = turf.midpoint([point1.lng, point1.lat], [point2.lng, point2.lat]);
    const buffered = turf.buffer(midpoint, radius, { units: 'kilometers' });
    const layer = L.geoJSON(buffered as any).addTo(map);

    return () => {
      layer.remove();
    };
  }, [map, point1, point2, radius]);

  return null;
};

export default MidpointBuffer;
