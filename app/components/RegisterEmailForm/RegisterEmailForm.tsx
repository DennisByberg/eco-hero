'use client';

import axios from 'axios';
import './RegisterEmailForm.scss';
import { useState } from 'react';
import delay from 'delay';

function RegisterMyEmailButton() {
  const [mailInput, setMailInput] = useState('');

  async function handleRegisterMyEmail(email: string) {
    await axios.post('/api/users', { email: email });
    await delay(3000);
    setMailInput('');
  }
  return (
    <div>
      <input
        onChange={(e) => setMailInput(e.target.value)}
        value={mailInput}
        className='home__input'
        type='email'
        placeholder='type your email here...'
      />
      <button
        className='reg__btn'
        onClick={() => handleRegisterMyEmail(mailInput)}
      >
        REGISTER MY EMAIL
      </button>
    </div>
  );
}
export default RegisterMyEmailButton;
