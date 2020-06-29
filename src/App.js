import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactApp from './component/ContactApp';

class App extends Component {
  render() {
    return (
      <div className = "container">
        <ContactApp/>
      </div>
    );
  }
}

export default App;
