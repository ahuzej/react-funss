import React from 'react';
import { Component } from 'react';
import './App.css';
import NavigationBar from '../navigation_bar/NavigationBar';
import Footer from '../footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Footer />
      </div>
    );
  }
}

export default App;
