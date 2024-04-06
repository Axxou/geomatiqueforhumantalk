import React, { useState } from "react";
import Header from "../components/header";
import MainSpace from "../components/mainSpace";
import Result from "../components/result";
import './mainpage.css';

import humantalkImg from "../assets/dataset/img/human-talks.png";
import simplonImg from "../assets/dataset/img/simplon-removebg-preview.png";

interface Bakery {
  id: string;
  name: string;
  lat: number;
  lng: number;
  distance?: number;
}

const MainPage: React.FC = () => {
  const [filteredAndSortedBakeries, setFilteredAndSortedBakeries] = useState<Bakery[]>([]);

  return (
    <div className="main-container">
      <Header humantalkImg={humantalkImg} simplonImg={simplonImg} />
      <MainSpace setFilteredAndSortedBakeries={setFilteredAndSortedBakeries} />
      <div className="result-container">
        <Result bakeries={filteredAndSortedBakeries} />
      </div>
    </div>
  );
};

export default MainPage;
