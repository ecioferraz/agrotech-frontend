import PropTypes from 'prop-types';
import React from 'react';

export default function ImageCard({ imageURL, name, className }) {
  return (
    <div className="image-card">
      <img
        alt={ `Imagem da ilha ${name}.` }
        src={ imageURL }
        className={ className }
      />
    </div>
  );
}

ImageCard.propTypes = {
  className: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
