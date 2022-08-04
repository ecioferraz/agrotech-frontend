// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, TextInput } from '../components';

export default function SearchForm() {
  const [searchInput, setSearchInput] = useState('');

  const handleClick = () => {};

  return (
    <form>
      <TextInput
        className="search-input"
        type="text"
        name="searchInput"
        value={ searchInput }
        placeholder="Pesquise uma ilha"
        onChange={ ({ target: { value } }) => setSearchInput(value) }
      />
      <Button
        name="searchBtn"
        handleClick={ handleClick }
        className="search-btn"
        disabled={ !searchInput.length }
      />
    </form>
  );
}

SearchForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
};
