import React, { useEffect, useState } from 'react';
import { Measurement } from '../components';
import { getData } from '../services/APIRequests';
import '../styles/MeasurementsList.css';

export default function MeasurementsList() {
  const [measurements, setMeasurements] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchIsleName = async (measurements) => {
    const { data } = await getData('isle');

    const measurements_with_isle_name = measurements.map((measurement)=> {
      const isle = data.find((isle)=> {
        return isle.id === measurement.idIsle;
      }).name;
      return { ...measurement, isleName: isle };
    } );
    setMeasurements(measurements_with_isle_name);
  };

  const fetchMeasurements = async () => {
    setLoading(true);
    const { data } = await getData('measurement');
    await fetchIsleName(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMeasurements();
  } , []);

  return (

    <div className="measurements-list">
      {
        loading ? (
          <div className="loading">
            <div className="loading-icon">
              <i className="fas fa-spinner fa-pulse"></i>
            </div>
            <div className="loading-text">
              <p>Carregando...</p>
            </div>
          </div>
        ) : (
          <div className="measurements-list-body">
            {
              measurements.map(({
                isleName,
                temperature,
                soilHumidity,
                airHumidity,
                measuredAt
              }) => (
                <Measurement
                  key={ isleName }
                  isleName={ isleName }
                  temperature={ temperature }
                  airHumidity={ airHumidity }
                  soilHumidity={ soilHumidity }
                  createdAt={ measuredAt } />
              ))
            }
          </div>
        )
      }
    </div>
  );
}