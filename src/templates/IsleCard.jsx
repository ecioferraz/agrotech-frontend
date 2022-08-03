import PropTypes from 'prop-types';
import React from 'react';
import { ImageCard, StatusCard, TextCard } from '../components';

export default function IsleCard(
  { imageURL, name, status, temperature, airHumidite, soilHumidite, dateTime },
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
          text={ `${temperature}°` }
        />
        <TextCard
          text={ `${airHumidite}%` }
        />
        <TextCard
          text={ `${soilHumidite}%` }
        />
        <TextCard
          text={ dateTime }
        />
      </div>
    </div>
  );
}

IsleCard.propTypes = {
  airHumidite: PropTypes.number.isRequired,
  dateTime: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  soilHumidite: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};
