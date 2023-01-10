import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      console.log(formData);
    }
  };

  return (
    <div id='register' >
      <div className='container'>
        <form onSubmit={onSubmit}>
          <h1 className='text-center mb-4'>Register</h1>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              name='name'
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              name='password'
              value={password}
              onChange={onChange}
              minLength='6'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Confirm-Password'
              name='password2'
              value={password2}
              onChange={onChange}
              minLength='6'
            />
          </div>
          <div>
            Already have an account?
            <Link to='/login'> Login here</Link>
          </div>
          <input type='submit' value='Register' className='btn btn-primary btn-block' />
        </form>
      </div>
    </div>
  );
};

export default Register;
