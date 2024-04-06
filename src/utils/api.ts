import axios from 'axios';

const API_KEY = '5b3ce3597851110001cf6248cf9a2804132045109aa5f88ea996f184';
const BASE_URL = 'https://api.openrouteservice.org/v2/directions';

export interface Coordinates {
    lat: number;
    lng: number;
  }

interface ItineraireOptions {
  start: Coordinates;
  end: Coordinates;
  profile: 'driving-car' | 'foot-walking' | 'cycling-regular';
}

export const Itinerary = async (options: ItineraireOptions) => {
  const { start, end, profile } = options;

  try {
    const response = await axios.get(`${BASE_URL}/${profile}`, {
      params: {
        api_key: API_KEY,
        start: `${start.lng},${start.lat}`,
        end: `${end.lng},${end.lat}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching directions:', error);
    throw error;
  }
};

export const fetchIsochrone = async (point: Coordinates, profile: string, range: number[]) => {
    try {
        const response = await axios.post(
            `https://api.openrouteservice.org/v2/isochrones/${profile}`,
            {
                locations: [[point.lng, point.lat]],
                range: range,
            },
            {
                headers: {
                    'Authorization': API_KEY,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching isochrone:', error.response ? error.response.data : error.message);
        } else {
            console.error('An unexpected error occurred:', error);
        }
        throw error;
    }
};