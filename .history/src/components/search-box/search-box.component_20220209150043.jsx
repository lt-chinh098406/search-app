import React from 'react';

import './search-box.styles.css';

export const SearchBox = () => (
  <input
    type="search"
    placeholder="search monsters"
    onChange={(e) => setSearchField(e.target.value)}
  />
);
