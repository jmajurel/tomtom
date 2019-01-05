import React from 'react';
//import './Nav.css';

const Nav = props => ((
  <div className='navbar navbar-expand-lg navbar-light bg-light'>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
	<li className="nav-item active">
	  <a className="nav-link" href="/">Presentation</a>
	</li>
	<li className="nav-item">
	  <a className="nav-link" href="/">Menuiserie</a>
	</li>
	<li className="nav-item">
	  <a className="nav-link" href="/">Creations</a>
	</li>
	<li className="nav-item">
	  <a className="nav-link" href="/">Contact</a>
	</li>
      </ul>
    </div>
  </div>
));

export default Nav;
