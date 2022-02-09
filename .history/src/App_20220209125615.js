import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }));
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.monsters.map((monster) => (
            <li>{monster.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
