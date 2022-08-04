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
      });
      return { ...measurement, isleName: isle ? isle.name : '--- test ---' };
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
            <div className="loading-text">
              <p>Carregando...</p>
            </div>
          </div>
        ) : (
          <div className="measurements-list-body">
            <h1>MEASUREMENTS LIVE</h1>
            {
              measurements.map(({
                isleName,
                temperature,
                soilHumidity,
                airHumidity,
                measuredAt
              }) => (
                <Measurement
                  key={ measuredAt }
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