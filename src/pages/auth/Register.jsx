import axios from 'axios';
import React, { useState } from 'react'

function Register() {

      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [password, setPassword] = useState('');

      const login = async () => {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/register', {name, email,phone, password });

    // localStorage.setItem('token', res.data.token);
   
  } catch (err) {
    console.error('Login failed:', err.response?.data || err.message);
  }
};

  return (
     <div>
            <h1>Login</h1>

            <form action="" method="post">

                <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} placeholder='name'/><br />
                <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='email' /> <br />
                <input type="text" name='phone' value={phone} onChange={e => setPhone(e.target.value)} placeholder='phone'/> <br />
                <input type="text" name='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='password' /> <br />


                <button type='button' onClick={login}>Submit</button>
            </form>
        </div>
  )
}

export default Register