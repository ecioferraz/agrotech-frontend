import React from 'react';
import GenericCard from '../templates/GenericCard';
import SearchForm from '../templates/SearchForm';
import isleMock from '../mocks/isle';

export default function Home() {
  return (
    <>
      <SearchForm />
      <div className="isles">
        <div className="isle-cards">
          { isleMock.map((isle) => (
            <GenericCard
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
