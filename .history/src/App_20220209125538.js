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
        <header className="App-header">
          <ul>
            {this.state.monsters.map((monster) => (
              <li>{monster.name}</li>
            ))}
          </ul>
          <button
            onClick={() => {
              this.setState({ string: 'Hello Chính' });
            }}
          >
            Change Text
          </button>
        </header>
      </div>
    );
  }
}

export default App;
