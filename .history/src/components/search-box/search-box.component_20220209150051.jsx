import React from 'react';

import './search-box.styles.css';

export const SearchBox = () => (
  <input
    className="search"
    type="search"
    placeholder="search monsters"
    onChange={(e) => setSearchField(e.target.value)}
  />
);
