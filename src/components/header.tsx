import React from 'react';
import './header.css';

interface HeaderProps {
    humantalkImg: string;
    simplonImg: string;
  }

  const Header: React.FC<HeaderProps> = ({ humantalkImg, simplonImg }) => {
    return (
      <header className="header">
        <img src={humantalkImg} alt="Human Talks" />
        <h1>Exemples d'utilisation de la géomatique</h1>
        <img src={simplonImg} alt="Simplon" />
      </header>
    );
  };
  
  export default Header;