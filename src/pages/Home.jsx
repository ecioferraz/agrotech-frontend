import React from 'react';
// import GenericCard from '../templates/GenericCard';
// import SearchForm from '../templates/SearchForm';
// import isleMock from '../mocks/isle';
import MeasurementsList from '../templates/MeasurementsList';
import SatelliteCard from '../templates/SatelliteCard';

export default function Home() {
  return (
    <div>
      <SatelliteCard />
      <MeasurementsList />
    </div>
  );
}
