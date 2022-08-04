import React from 'react';
import IsleCard from '../templates/IsleCard';
import { SearchForm } from '../templates';
import isleMock from '../mocks/isle';

export default function Home() {
  return (
    <>
      <SearchForm />
      <div className="isles">
        <div className="isle-cards">
          { isleMock.map((isle) => (
            <IsleCard
              key={isle.name}
              name={isle.name}
              imageURL={isle.imageURL}
              status={isle.status}
              temperature={isle.temperature}
              airHumidite={isle.airHumidite}
              soilHumidite={isle.soilHumidite}
              dateTime={isle.dateTime}
            />
          )) }
        </div>
      </div>
    </>
  );
}
