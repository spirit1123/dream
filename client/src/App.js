import { Component } from 'react';
import './App.css';
import { World } from './components/game/World';
import { ActionBar } from "./components/ui/ActionBar";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <World></World>
        <ActionBar></ActionBar>
      </div>
    );
  }
}