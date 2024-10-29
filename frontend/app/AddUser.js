// /frontend/app/addUser.js

import { useState } from 'react';
import Home from './page';

export default function AddUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/flask/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      alert('User added successfully');
      setName('');
      setEmail('');
    } else {
      alert('Failed to add user');
    }
  };

  return (
    <div style={{ padding: '50px' }}>
      <h1>Add a New User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
