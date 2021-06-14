import { Component } from 'react';
import './App.css';
import { World } from './components/game/World';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <World></World>
      </div>
    );
  }
}