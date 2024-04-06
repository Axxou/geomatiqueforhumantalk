import React, { useEffect, useState } from 'react';
import { Polygon } from 'react-leaflet';
import { fetchIsochrone, Coordinates } from '../utils/api';
import L, { LatLngTuple } from 'leaflet';

interface IsochroneProps {
    point: Coordinates;
    profile: 'foot-walking' | 'driving-car';
    range: number[];
}

const Isochrone: React.FC<IsochroneProps> = ({ point, profile , range }) => {
    const [isochrones, setIsochrones] = useState<{coordinates: LatLngTuple[], range: number}[]>([]);

    const rangeColors: { [key: number]: string } = {
        300: 'green',
        500: 'orange',
        700: 'red'
    };

    useEffect(() => {
        const loadIsochrones = async () => {
            const tempIsochrones = [];
            for (let i = 0; i < range.length; i++) {
                const data = await fetchIsochrone(point, profile, [range[i]]);
                if (data.features && data.features.length > 0) {
                    const coordinates: LatLngTuple[] = data.features[0].geometry.coordinates[0].map(
                        (coord: [number, number]): LatLngTuple => [coord[1], coord[0]] as LatLngTuple
                    );
                    tempIsochrones.push({ coordinates, range: range[i] });
                }
            }
            setIsochrones(tempIsochrones);
        };

        loadIsochrones();
    }, [point, profile, range]);

    return (
        <>
            {isochrones.map(isochrone => (
                <Polygon
                    key={isochrone.range}
                    positions={isochrone.coordinates}
                    color={rangeColors[isochrone.range]}
                />
            ))}
        </>
    );
};

export default Isochrone;
