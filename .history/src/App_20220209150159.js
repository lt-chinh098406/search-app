import React, { useState } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { CardList } from './components/card-list/card-list.component';

function App() {
  const { monsters, setMonsters } = useState([]);
  const { searchField, setSearchField } = useState('');

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setMonsters(data));

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="search"
        placeholder="search monsters"
        onChange={(e) => setSearchField(e.target.value)}
      />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
}

export default App;
