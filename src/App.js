import React, { Component } from 'react';
import './Reset.css';
import './App.css';

import Header from './Header/Header.js';
import Bandeau from './Bandeau/Bandeau.js';
import Partenaires from './partenaires/Partenaires.js';

class App extends Component {
  render() {
    return (
      <div className="App">


      <div className="container-principal">
        <Header></Header>
        <Bandeau></Bandeau>

        <Partenaires></Partenaires>
      </div>










      </div>
    );
  }
}

export default App;
