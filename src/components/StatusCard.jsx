import PropTypes from 'prop-types';
import React from 'react';

export default function StatusCard({ status }) {
  return (
    <div className="status-card">
      <p
        className={ status ? 'active-status' : 'inactive-status' }
      >
        { status }
      </p>
    </div>
  );
}

StatusCard.propTypes = {
  status: PropTypes.bool.isRequired,
};
