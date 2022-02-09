import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asc1',
        },
        {
          name: 'Dracula',
          id: 'asr2',
        },
        {
          name: 'Zombie',
          id: 'asw1',
        },
      ],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => console.log(data));
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
