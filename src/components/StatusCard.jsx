import PropTypes from 'prop-types';
import React from 'react';

export default function StatusCard({ status }) {
  return (
    <div className="status-card">
      <p
        className="status"
      >
        { status }
      </p>
    </div>
  );
}

StatusCard.propTypes = {
  status: PropTypes.string.isRequired,
};
