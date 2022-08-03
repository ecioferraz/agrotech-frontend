import PropTypes from 'prop-types';
import React from 'react';
import { ImageCard, StatusCard, TextCard } from '../components';

export default function IsleCard(
  { imageURL, name, status, isle },
) {
  return (
    <div className="isle-card">
      <ImageCard
        imageURL={ imageURL }
        name={ name }
      />
      <StatusCard
        status={ status }
      />
      <div className="isle-card-info">
        <TextCard
          text={ `${isle.temperature}°` }
        />
        <TextCard
          text={ `${isle.airHumidite}%` }
        />
        <TextCard
          text={ `${isle.soilHumidite}%` }
        />
        <TextCard
          text={ isle.dateTime }
        />
      </div>
    </div>
  );
}

IsleCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  isle: PropTypes.shape({
    airHumidite: PropTypes.number.isRequired,
    dateTime: PropTypes.string.isRequired,
    soilHumidite: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired
  }),
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};
