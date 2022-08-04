import PropTypes from 'prop-types';
import React from 'react';

export default function TextCard({ text }) {
  return (
    <p className="text-card-text">
      { text }
    </p>
  );
}

TextCard.propTypes = {
  text: PropTypes.string.isRequired,
};
