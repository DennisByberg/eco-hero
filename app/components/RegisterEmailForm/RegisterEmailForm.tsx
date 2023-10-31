'use client';

import axios from 'axios';
import './RegisterEmailForm.scss';
import delay from 'delay';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface IMailForm {
  email: string;
}

function RegisterEmailForm() {
  const [error, setError] = useState('');
  const { register, handleSubmit, reset } = useForm<IMailForm>();

  async function onSubmitForm(data: IMailForm) {
    try {
      await axios.post('/api/users', data);
      reset();
      setError('');
    } catch {
      setError('An unexpected error occurred');
    }
  }

  return (
    <form className='register-email-form' onSubmit={handleSubmit(onSubmitForm)}>
      <div className='register-email-form__container'>
        <input
          {...register('email')}
          className='register-email-form__container__input'
          placeholder='type your email here...'
        />
        {error && (
          <p className='register-email-form__container__errorMSG'>{error}</p>
        )}
      </div>
      <button className='register-email-form__registerBTN'>
        REGISTER MY EMAIL
      </button>
    </form>
  );
}
export default RegisterEmailForm;
