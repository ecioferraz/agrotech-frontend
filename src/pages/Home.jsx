import React from 'react';
import MeasurementsList from '../templates/MeasurementsList';
import SatelliteCard from '../templates/SatelliteCard';
import SearchIsle from '../templates/SearchIsle';

export default function Home() {
  return (
    <div>
      <div>
        <SatelliteCard />
        <SearchIsle />
      </div>
      <div>
        <MeasurementsList />
      </div>
    </div>
  );
}
