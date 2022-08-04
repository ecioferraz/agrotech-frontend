import React, { useState } from 'react';
import { Button, TextInput } from '../components';

import '../styles/SearchForm.css';

export default function SearchForm() {
  const [searchInput, setSearchInput] = useState('');

  const handleClick = () => {};

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
      <Button
        name="Buscar"
        handleClick={ handleClick }
        className="search-btn"
        disabled={ !searchInput.length }
      />
    </form>
  );
}
