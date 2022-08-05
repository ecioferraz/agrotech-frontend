import PropTypes from 'prop-types';
import React from 'react';
import { TextInput } from '../components';

import '../styles/SearchForm.css';

export default function SearchForm({ searchInput, setSearchInput }) {
  return (
    <form className="search-form">
      <TextInput
        className="search-input"
        type="text"
        name="searchInput"
        value={ searchInput }
        placeholder="Pesquise uma ilha"
        onChange={ ({ target: { value } }) => setSearchInput(value) }
      />
    </form>
  );
}

SearchForm.propTypes = {
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
};
