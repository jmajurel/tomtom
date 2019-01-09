import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className='Page'>
	<div className='Contact'>
	  <h3>Contactez moi</h3>
	  <form onSubmit={this.handleSubmit}>
	    <div className='form-group'>
	      <label htmlFor='name'>Name</label>
	      <input className='form-control' onChange={this.handleUpdate} type='text' id='name' name='name' placeholder='name' required />
	    </div>
	    <div className='form-group'>
	      <label htmlFor='email'>Email</label>
	      <input className='form-control' onChange={this.handleUpdate} type='email' id='email' name='email' placeholder='email' required />
	    </div>
	    <div className='form-group'>
	      <label htmlFor='phone'>Phone</label>
	      <input className='form-control' onChange={this.handleUpdate} type='text' id='phone' name='phone' placeholder='phone number' />
	    </div>
	    <div className='form-group'>
	      <label htmlFor='message'>Message</label>
	      <textarea className='form-control' onChange={this.handleUpdate} id='message' name='message' rows='8'></textarea>
	    </div>
	    <button type='submit' className='btn btn-primary'>Send</button>
	  </form>
	</div>
      </div>
    );
  }
}

export default Contact;
