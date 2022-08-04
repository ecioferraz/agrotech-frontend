import {
  faCalendar,
  faDroplet,
  faHandHoldingDroplet,
  faTemperatureHalf,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { DownloadIcon, ImageCard, StatusCard, TextCard } from '../components';
import '../styles/IsleCard.css';

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
      <DownloadIcon />
      <div className="isle-card-body">
        <div>
          <div className="isle-info">
            <FontAwesomeIcon icon={faTemperatureHalf} />
            <TextCard
              text={ `${temperature}°` }
            />
          </div>
          <div className="isle-info">
            <FontAwesomeIcon icon={faDroplet} />
            <TextCard
              text={ `${airHumidite}%` }
            />
          </div>
        </div>
        <div>
          <div className="isle-info">
            <FontAwesomeIcon icon={faHandHoldingDroplet} />
            <TextCard
              text={ `${soilHumidite}%` }
            />
          </div>
          <div className="isle-info">
            <FontAwesomeIcon icon={faCalendar} />
            <TextCard
            
              text={ dateTime }
            />
          </div>
        </div>
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
