import React, { Component } from 'react';
import Container from './Container/Container';
import './App.css';
import TableBody from './CrudContainer/TableBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container/>
      </div>
    );
  }
}

export default App;
