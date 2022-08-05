import {
  faCalendar,
  faDroplet,
  faHandHoldingDroplet,
  faTemperatureHalf,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { TextCard } from '../components';
import '../styles/Measurement.css';

export default function Measurement({
  isleName,
  temperature,
  airHumidity,
  soilHumidity,
  createdAt
}) {
  return (
    <div className="measurement-card">
      <div className="measurement-card-body">
        <div>
          <div className="measurement-info">
            <TextCard
              text={ `Ilha ${isleName}` }
            />
          </div>
          <div className="measurement-info">
            <FontAwesomeIcon icon={faTemperatureHalf} />
            <TextCard
              text={ `${temperature.toFixed(2)}°` }
            />
          </div>
          <div className="measurement-info">
            <FontAwesomeIcon icon={faDroplet} />
            <TextCard
              text={ `${airHumidity.toFixed(2)}%` }
            />
          </div>
        </div>
        <div>
          <div className="measurement-info">
            <FontAwesomeIcon icon={faHandHoldingDroplet} />
            <TextCard
              text={ `${soilHumidity.toFixed(2)}%` }
            />
          </div>
          <div className="measurement-info">
            <FontAwesomeIcon icon={faCalendar} />
            <TextCard
              text={ new Date(createdAt).toLocaleString() }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Measurement.propTypes = {
  isleName: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  airHumidity: PropTypes.number.isRequired,
  soilHumidity: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
};