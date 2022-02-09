import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
        },
        {
          name: 'Dracula',
        },
        {
          name: 'Zombie',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.monsters.map((monster) => (
              <p>{monster}</p>
            ))}
          </p>
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
