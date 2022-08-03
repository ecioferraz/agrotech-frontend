import PropTypes from 'prop-types';
import React from 'react';

export default function ImageCard({ imageURL, name }) {
  return (
    <div className="image-card">
      <img
        alt={ `Imagem da ilha ${name}.` }
        src={ imageURL }
        className="isle-image"
        width="80"
        height="100"
      />
    </div>
  );
}

ImageCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
