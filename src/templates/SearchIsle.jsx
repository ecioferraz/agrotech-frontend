import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import IslesTable from './IslesTable';
import { getData } from '../services/APIRequests';

import '../styles/SearchIsle.css';

export default function SearchIsle() {
  const [isles, setIsles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const getIsles = async () => {
      setIsLoading(true);
      const { data } = await getData('isle');
      setIsles(data);
      setIsLoading(false);
    };
    
    getIsles();
  }, []);

  const filteredIsle = searchInput.length
    ? isles.filter(({ name }) => name.includes(searchInput))
    : [];

  return (
    <div className="search-isle-body">
      <SearchForm
        searchInput={ searchInput }
        setSearchInput={ setSearchInput }
      />
      <div className="mini-isles">
        <div className="mini-isle-cards">
          { isLoading
            ? <p>Loading...</p>
            : <IslesTable
              index={ ['Ilha', 'Status'] }
              body={ searchInput.length ? filteredIsle : isles }
            />
          }
        </div>
      </div>
    </div>
  );
}
