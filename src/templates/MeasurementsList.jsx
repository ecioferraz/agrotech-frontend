import React, { useEffect, useState } from 'react';
import { Measurement } from '../components';
import { getData } from '../services/APIRequests';
import '../styles/MeasurementsList.css';

export default function MeasurementsList() {
  const [measurements, setMeasurements] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMeasurements = async () => {
    setLoading(true);
    const measurementsList = await getData('measurements');
    setMeasurements(measurementsList);
    setLoading(false);
  }

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
              measurements.map(({ isleName, temperature, soilHumidity, airHumidity, createdAt }) => (
                <Measurement key={ isleName } isleName={ isleName } temperature={ temperature } airHumidity={ airHumidity } soilHumidity={ soilHumidity } createdAt={ createdAt } />
              ))
            }
          </div>
        )
      }
    </div>
  )
}