import React, { useState } from "react";
import "./mainSpace.css";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import * as turf from "@turf/turf";
import ListingButtons from "./listingButtons";
import PointsAffiches from "../geoprocessing/points";
import Line from "../geoprocessing/line";
import Midpoint from "../geoprocessing/midpoints";
import MidpointBuffer from "../geoprocessing/buffer";
import BakeryPoints from "../geoprocessing/listingPointsBoulangerie";
import FilterBoulangerie from "../geoprocessing/filtrerBoulangerie";
import Itineraire from "../geoprocessing/itineraire";
import Isochrone from "../geoprocessing/isochrone";

import bakery_icon from "../assets/dataset/img/bakery-icon.png";

interface Bakery {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

const MainSpace: React.FC<{
  setFilteredAndSortedBakeries: (bakeries: Bakery[]) => void;
}> = ({ setFilteredAndSortedBakeries }) => {
  const [geoProcessing, setGeoProcessing] = useState<"basic" | "advance">(
    "basic"
  );
  const defaultCenter: [number, number] = [45.175902, 5.727819];
  const defaultZoom = 14;

  const point1 = ({
    lat: 45.19125222180842,
    lng: 5.714754996857576,
  });
  const point2 = ({
    lat: 45.159752842163144,
    lng: 5.732533564212514,
  });
  const [showPoints, setShowPoints] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const [showMidpoint, setShowMidpoint] = useState(false);
  const [showBuffer, setShowBuffer] = useState(false);
  const [showBakeries, setShowBakeries] = useState(false);
  const [showFilteredBakeries, setShowFilteredBakeries] = useState(false);
  const [showWalkingItinerary, setShowWalkingItinerary] = useState(false);
  const [showDrivingItinerary, setShowDrivingItinerary] = useState(false);
  const [showWalkingIsochrone, setShowWalkingIsochrone] = useState(false);
  const [showDrivingIsochrone, setShowDrivingIsochrone] = useState(false);

  const bufferRadius = 0.3;

  const bakeryIcon = L.icon({
    iconUrl: bakery_icon,
    iconSize: [30, 40],
  });

  const handleWalkingItineraryButtonClick = () => {
    setShowWalkingItinerary(!showWalkingItinerary);
    setShowDrivingItinerary(false);
  };

  const handleDrivingItineraryButtonClick = () => {
    setShowDrivingItinerary(!showDrivingItinerary);
    setShowWalkingItinerary(false);
  };

  const handleWalkingIsochroneButtonClick = () => {
    setShowWalkingIsochrone(!showWalkingIsochrone);
  };

  const handleDrivingIsochroneButtonClick = () => {
    setShowDrivingIsochrone(!showDrivingIsochrone);
  };

  const [bakeries, setBakeries] = useState<Bakery[]>([
    {
      id: "1",
      name: "Le Pétrin d’Antan",
      lat: 45.17434608096295,
      lng: 5.7181181961770555,
    },
    {
      id: "2",
      name: "L’Épi Doré",
      lat: 45.176136034479455,
      lng: 5.7284473803998015,
    },
    {
      id: "3",
      name: "Aux Délices du Fournil",
      lat: 45.16875740444947,
      lng: 5.714967118972689,
    },
    {
      id: "4",
      name: "Boulange de la Vieille Ville",
      lat: 45.172359142444364,
      lng: 5.715172226631746,
    },
    {
      id: "5",
      name: "Douce Mie",
      lat: 45.177278920428165,
      lng: 5.7155291553014465,
    },
    {
      id: "6",
      name: "L’Atelier des Pains",
      lat: 45.17927576683051,
      lng: 5.717770618734428,
    },
    {
      id: "7",
      name: "Les Saveurs du Blé",
      lat: 45.179971772119565,
      lng: 5.72365605561028,
    },
    {
      id: "8",
      name: "Pain et Partage",
      lat: 45.17675153562482,
      lng: 5.725410761057863,
    },
    {
      id: "9",
      name: "La Maison du Croissant",
      lat: 45.17420165737349,
      lng: 5.729759663744991,
    },
    {
      id: "10",
      name: "Le Fournil des Traditions",
      lat: 45.178237070895605,
      lng: 5.730343830253437,
    },
    {
      id: "11",
      name: "Pains et Gourmandises",
      lat: 45.17737522908238,
      lng: 5.721395632438879,
    },
    {
      id: "12",
      name: "Au Bon Pain Quotidien",
      lat: 45.174700450619156,
      lng: 5.724457436854125,
    },
    {
      id: "13",
      name: "Le Petit Moulin",
      lat: 45.171098815097714,
      lng: 5.726305280465329,
    },
    {
      id: "14",
      name: "La Boulangerie de l’Étoile",
      lat: 45.17410686943045,
      lng: 5.722400312389193,
    },
    {
      id: "15",
      name: "L’Artisan du Levain",
      lat: 45.17047981446618,
      lng: 5.7215001966655965,
    },
    {
      id: "16",
      name: "Les Délices du Boulanger",
      lat: 45.16734600163903,
      lng: 5.724089458428554,
    },
    {
      id: "17",
      name: "La Panetière Enchantée",
      lat: 45.18197715009784,
      lng: 5.730310327041632,
    },
    {
      id: "18",
      name: "Au Coeur du Pain",
      lat: 45.170805206440235,
      lng: 5.730569736466893,
    },
    {
      id: "19",
      name: "Le Blé Sacré",
      lat: 45.18008342332054,
      lng: 5.7265134383309935,
    },
    {
      id: "20",
      name: "La Croûte Croustillante",
      lat: 45.17218064191073,
      lng: 5.718487984285869,
    },
  ]);

  const baseLayers = {
    OpenStreetMap: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    OpenStreetMapHOT: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
    OrthoPhoto:
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png",
    FondCarto: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  };

  const midpointCoordinates = turf.midpoint(
    [point1.lng, point1.lat],
    [point2.lng, point2.lat]
  ).geometry.coordinates;

  const midpoint = { lat: midpointCoordinates[1], lng: midpointCoordinates[0] };

  const handleShowFilteredBakeries = () => {
    setShowFilteredBakeries(!showFilteredBakeries);
    if (!showFilteredBakeries) {
      setShowBakeries(false);
  
      const buffer = turf.circle([midpoint.lng, midpoint.lat], bufferRadius, {
        units: "kilometers",
      });
  
      const filteredBakeries = bakeries.filter((bakery) => {
        return turf.booleanPointInPolygon(turf.point([bakery.lng, bakery.lat]), buffer);
      });
  
      console.log("Filtered Bakeries for Map Display:", filteredBakeries);
    } else {
      setShowBakeries(false);
    }
  };

  const handleCalculateDistances = () => {
    const buffer = turf.circle([midpoint.lng, midpoint.lat], bufferRadius, {
      units: "kilometers",
    });

    const bakeriesWithDistance = bakeries.map((bakery) => {
      const distance = turf.distance(
        [midpoint.lng, midpoint.lat],
        [bakery.lng, bakery.lat],
        { units: "kilometers" }
      );
      return { ...bakery, distance: distance * 1000 };
    });

    const filteredAndSortedBakeries = bakeriesWithDistance
      .filter((bakery) => turf.booleanPointInPolygon(
        turf.point([bakery.lng, bakery.lat]), buffer))
      .sort((a, b) => (a.distance || 0) - (b.distance || 0));

    setFilteredAndSortedBakeries(filteredAndSortedBakeries);
  };
  

  return (
    <div className="globalContainer">
      <div className="buttonsContainer">
        <button onClick={() => setGeoProcessing("basic")}>
          GeoProcessing Basic
        </button>
        <button onClick={() => setGeoProcessing("advance")}>
          GeoProcessing Advance
        </button>
        <ListingButtons
          buttonCount={geoProcessing === "basic" ? 7 : 5}
          onPointsButtonClick={() => setShowPoints(!showPoints)}
          onLineButtonClick={() => setShowLine(!showLine)}
          onMidpointButtonClick={() => setShowMidpoint(!showMidpoint)}
          onMidpointBufferButtonClick={() => setShowBuffer(!showBuffer)}
          onBakeriesButtonClick={() => setShowBakeries(!showBakeries)}
          onFilterBakeriesButtonClick={handleShowFilteredBakeries}
          onDistanceBakeriesButtonClick={handleCalculateDistances}
          onWalkingItineraryButtonClick={handleWalkingItineraryButtonClick}
          onDrivingItineraryButtonClick={handleDrivingItineraryButtonClick}
          onWalkingIsochroneButtonClick={handleWalkingIsochroneButtonClick}
          onDrivingIsochroneButtonClick={handleDrivingIsochroneButtonClick}
          mode={geoProcessing}
        />
      </div>
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        className="mapContainer"
        zoomControl={false}
        
      >
        <LayersControl position="topright">
          {Object.entries(baseLayers).map(([name, url], index) => (
            <LayersControl.BaseLayer
              name={name}
              key={index}
              checked={index === 0}
            >
              <TileLayer url={url} />
            </LayersControl.BaseLayer>
          ))}
        </LayersControl>
        {showPoints && <PointsAffiches point1={point1} point2={point2} />}
        {showLine && <Line point1={point1} point2={point2} />}
        {showMidpoint && <Midpoint point1={point1} point2={point2} />}
        {showBuffer && (
          <MidpointBuffer
            point1={point1}
            point2={point2}
            radius={bufferRadius}
          />
        )}
        {showBakeries && <BakeryPoints bakeries={bakeries} />}
        {showFilteredBakeries && (
          <FilterBoulangerie
            bakeries={bakeries}
            bufferCenter={midpoint}
            bufferRadius={bufferRadius}
            icon={bakeryIcon}
          />
        )}
        {showWalkingItinerary && (
          <Itineraire
            point1={point1}
            point2={point2}
            profile={"foot-walking"}
          />
        )}
        {showDrivingItinerary && (
          <Itineraire point1={point1} point2={point2} profile={"driving-car"} />
        )}
        {showWalkingIsochrone && (
          <Isochrone
            point={point2}
            profile="foot-walking"
            range={[700, 500, 300]}
          />
        )}
                {showDrivingIsochrone && (
          <Isochrone
            point={point2}
            profile="driving-car"
            range={[700, 500, 300]}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default MainSpace;
