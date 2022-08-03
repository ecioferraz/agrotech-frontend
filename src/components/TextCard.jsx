import PropTypes from 'prop-types';
import React from 'react';

export default function TextCard({ text }) {
  return (
    <div className="text-card">
      <p className="text-card-text">
        { text }
      </p>
    </div>
  );
}

TextCard.propTypes = {
  text: PropTypes.string.isRequired,
};
