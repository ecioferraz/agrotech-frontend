import React from 'react';
import SatelliteCard from '../templates/SatelliteCard';
import SearchIsle from '../templates/SearchIsle';
import MeasurementsList from '../templates/MeasurementsList';

export default function Home() {
  return (
    <div className="home">
      <h1>Agrotech Measure Shelter</h1>
      <main>
        <SatelliteCard />
        <SearchIsle />
      </main>
      <aside className="sidebar">
        <h2>Measurements Live</h2>
        <MeasurementsList />
      </aside>
    </div>
  );
}
