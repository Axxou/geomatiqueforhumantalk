import React from "react";
import "./result.css";

interface Bakery {
  id: string;
  name: string;
  lat: number;
  lng: number;
  distance?: number;
}

interface ResultProps {
  bakeries: Bakery[];
}

const Result: React.FC<ResultProps> = ({ bakeries }) => {
  const emptyRows = Math.max(4 - bakeries.length, 0);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Classé</th>
          <th>ID</th>
          <th>Nom</th>
          <th>Distance (m)</th>
          <th>Coordinates</th>
        </tr>
      </thead>
      <tbody>
        {bakeries.map((bakery, index) => (
          <tr key={bakery.id}>
            <td>{index + 1}</td>
            <td>{bakery.id}</td>
            <td>{bakery.name}</td>
            <td>{bakery.distance?.toFixed(2)} m</td>
            <td>{`${bakery.lat.toFixed(4)}, ${bakery.lng.toFixed(4)}`}</td>
          </tr>
        ))}
        {[...Array(emptyRows)].map((_, index) => (
          <tr key={`empty-${index}`}>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Result;
