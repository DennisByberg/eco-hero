'use client';
import './RegisterMyEmailButton.scss';

function RegisterMyEmailButton() {
  function handleRegisterMyEmail() {
    console.log('REGISTER EMAIL');
  }
  return <button onClick={handleRegisterMyEmail}>REGISTER MY EMAIL</button>;
}
export default RegisterMyEmailButton;
