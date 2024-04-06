import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import * as turf from '@turf/turf';

interface Bakery {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

interface FilterBoulangerieProps {
    bakeries: Bakery[];
    bufferCenter: { lat: number; lng: number; };
    bufferRadius: number;
    icon: L.Icon;
  }

const FilterBoulangerie: React.FC<FilterBoulangerieProps> = ({ bakeries, bufferCenter, bufferRadius, icon }) => {
  const buffer = turf.circle([bufferCenter.lng, bufferCenter.lat], bufferRadius, { steps: 80, units: 'kilometers' });
  const bakeryPoints = bakeries.map(bakery => turf.point([bakery.lng, bakery.lat], bakery));
  const pointsWithin = turf.pointsWithinPolygon(turf.featureCollection(bakeryPoints), buffer);

  return (
    <>
      {pointsWithin.features.map(feature => (
        <Marker
          key={feature.properties.id}
          position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}
          icon={icon}
        >
          <Popup>{feature.properties.name}</Popup>
        </Marker>
      ))}
    </>
  );
};

export default FilterBoulangerie;
