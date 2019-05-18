import React from 'react';
import { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Page from './Page';
import Footer from './Footer';

class App extends Component {
  changePage = page => this.setState({
    page: page
  });

  render() {
    return (
      <div className="App">
        <NavigationBar changePage={this.changePage} />
        {/* <Page page={this.state && this.state.page || 'movies'} /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
