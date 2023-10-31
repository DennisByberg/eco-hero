'use client';

import axios from 'axios';
import './RegisterMyEmailButton.scss';

function RegisterMyEmailButton() {
  async function handleRegisterMyEmail(mailInput: string) {
    axios.post('/api/userReg', mailInput);
  }
  return (
    <button className='reg__btn' onClick={(mailInput) => handleRegisterMyEmail}>
      REGISTER MY EMAIL
    </button>
  );
}
export default RegisterMyEmailButton;
