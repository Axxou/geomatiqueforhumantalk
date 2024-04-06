import React from 'react';
import Button from './button';
import './listingButtons.css';

interface ListingButtonsProps {
  buttonCount: number;
  onPointsButtonClick?: () => void;
  onLineButtonClick?: () => void;
  onMidpointButtonClick?: () => void;
  onMidpointBufferButtonClick?: () => void;
  onBakeriesButtonClick?: () => void;
  onFilterBakeriesButtonClick?: () => void;
  onDistanceBakeriesButtonClick?: () => void;
  onWalkingItineraryButtonClick?: () => void;
  onDrivingItineraryButtonClick?: () => void;
  onWalkingIsochroneButtonClick?: () =>void;
  onDrivingIsochroneButtonClick?: () =>void;
  mode: 'basic' | 'advance';
}

const ListingButtons: React.FC<ListingButtonsProps> = ({ buttonCount, onPointsButtonClick, onLineButtonClick, onMidpointButtonClick, onMidpointBufferButtonClick, onBakeriesButtonClick,onFilterBakeriesButtonClick, onDistanceBakeriesButtonClick, onWalkingItineraryButtonClick, onDrivingItineraryButtonClick, onWalkingIsochroneButtonClick, onDrivingIsochroneButtonClick, mode }) => {
  const buttonTextsBasic = [
    'Points', 'Ligne', 'Midpoint', 'Buffer', 'Liste Boulangerie', 'Filtre Boulangerie', 'Ordre et distances'
  ];
  const buttonTextsAdvance = [
    'Points', 'Itineraire Pieton', 'Itineraire Voiture', 'Isochrone Pieton', 'Isochrone Voiture'
  ];

  const buttonTexts = mode === 'basic' ? buttonTextsBasic : buttonTextsAdvance;

  return (
    <div className="listing-buttons">
      {Array.from({ length: buttonCount }, (_, i) => buttonTexts[i]).map((text, index) => (
        <Button
          key={index}
          text={text || `Bouton ${index + 1}`}
          onClick={() => {
            if (index === 0 && mode === 'basic') {
              onPointsButtonClick && onPointsButtonClick();
            } else if (index === 1 && mode === 'basic') {
              onLineButtonClick && onLineButtonClick();
            } else if (index === 2 && mode === 'basic') {
              onMidpointButtonClick && onMidpointButtonClick();
            } else if (index === 3 && mode === 'basic') {
              onMidpointBufferButtonClick && onMidpointBufferButtonClick();
            } else if ( index === 4 && mode === 'basic') {
              onBakeriesButtonClick && onBakeriesButtonClick();
            } else if ( index === 5 && mode === 'basic') {
              onFilterBakeriesButtonClick && onFilterBakeriesButtonClick();
            } else if ( index === 6 && mode === 'basic') {
              onDistanceBakeriesButtonClick && onDistanceBakeriesButtonClick();
            } else if ( index === 0 && mode === 'advance'){
              onPointsButtonClick && onPointsButtonClick();
            } else if ( index === 1 && mode === 'advance'){
              onWalkingItineraryButtonClick && onWalkingItineraryButtonClick();
            } else if ( index === 2 && mode === 'advance'){
              onDrivingItineraryButtonClick && onDrivingItineraryButtonClick();
            } else if ( index === 3 && mode ==='advance'){
              onWalkingIsochroneButtonClick && onWalkingIsochroneButtonClick();
            } else if ( index === 4 && mode ==='advance'){
              onDrivingIsochroneButtonClick && onDrivingIsochroneButtonClick();
            }
          }}
        />
      ))}
    </div>
  );
};

export default ListingButtons;
