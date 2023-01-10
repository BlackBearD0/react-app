import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    alert('heello');
    // Perform login here, for example by making a POST request to a server
  };

  return (
    <div id='login'>
      <div className='container'>
        <form onSubmit={onSubmit}>
          <h1 className='text-center mb-4'>Login</h1>
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
          <div>
            Don't have an account?
            <Link to='/register'> Register here</Link>
          </div>
          <input type='submit' value='Login' className='btn btn-primary btn-block' />
        </form>
      </div>
    </div>
  );
};

export default Login;
