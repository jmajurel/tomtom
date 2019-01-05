import React, { Component } from 'react';

import Nav from './Nav';
import Presa from './Presa';
import Menuiserie from './Menuiserie';
import Creations from './Creations';
import Contact from './Contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
	<Presa />
	<Menuiserie />
	<Creations />
	<Contact />
      </div>
    );
  }
}

export default App;
