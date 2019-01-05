import React from 'react';

import Presa from './Presa';
import Menuiserie from './Menuiserie';
import Creations from './Creations';
import Contact from './Contact';

import './Main.css';

const Main = props => ((
  <div className='Main'>
    <Presa />
    <Menuiserie />
    <Creations />
    <Contact />
  </div>
));

export default Main;
