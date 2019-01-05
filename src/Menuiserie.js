import React from 'react';
import './Menuiserie.css';
import WoodWork from "./images/WoodWork.jpg";
import Stump from './images/stump.jpg';

const Menuiserie = props => ((
  <div className='Page Menuiserie'>
    <h2>Mon metier, la menuiserie</h2>
    <div className='Menuiserie-Presa'>
      <div className='blockMetier'>
	<h3>Different types de Bois</h3>
	<div className='woodTypes'>
	  <div className='woodItem' style={{backgroundImage: Stump}}>bois1</div>
	  <div className='woodItem'>bois2</div>
	  <div className='woodItem'>bois3</div>
	</div>
      </div>
      <div className='blockMetier'>
	<h3>Conception</h3>
	<img id='img-concpt' width='500px' alt='machine' src={WoodWork}/>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum vestibulum tristique. Cras facilisis nec lectus in laoreet. Etiam faucibus velit sed dolor aliquet aliquet. Aliquam erat volutpat.</p> 
      </div>
    </div>
  </div>
));

export default Menuiserie;

