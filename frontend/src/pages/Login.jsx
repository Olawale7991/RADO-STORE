import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (currentState === 'Login') {
        // Login API Call
        const response = await axios.post('http://localhost:8081/login', { email, password });
        console.log('Login successful', response.data);

        // Navigate to home page on successful login
        navigate('/'); 
      } else {
        // Sign Up API Call
        const response = await axios.post('http://localhost:8081/register', { name, email, password });
        console.log('Sign Up successful', response.data);

        // Optionally redirect after successful signup
        navigate('/');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>

      {currentState === 'Sign Up' && (
        <input
          type="text"
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}

      <input
        type="email"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer font-bold hover:text-lg'>Forgot your password?</p>
        {currentState === 'Login' ? 
          <p className='cursor-pointer font-bold hover:text-lg' onClick={() => setCurrentState('Sign Up')}>Create account</p> :
          <p className='cursor-pointer font-bold hover:text-lg' onClick={() => setCurrentState('Login')}>Login Here</p>
        }
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
}

export default Login;
