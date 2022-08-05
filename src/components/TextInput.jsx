import PropTypes from 'prop-types';
import React from 'react';

export default function TextInput(
  { className, labelText, type, name,
    value, placeholder, onChange },
) {
  return (
    <>
      <label htmlFor={ name }>
        { `${labelText} ` }
      </label>
      <input
        className={ className }
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
        id={ name }
        placeholder={ placeholder }
      />
    </>
  );
}

TextInput.propTypes = {
  className: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  labelText: '',
  placeholder: '',
};
