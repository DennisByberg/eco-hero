'use client';
import axios from 'axios';
import './RegisterEmailForm.scss';
import delay from 'delay';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { registerMailSchema } from '@/app/validationSchemas';
import Spinner from '../Spinner/Spinner';
import toast, { Toaster } from 'react-hot-toast';

type TMailForm = z.infer<typeof registerMailSchema>;

function RegisterEmailForm() {
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TMailForm>();

  async function onSubmitForm(data: TMailForm) {
    try {
      setIsSubmitting(true);
      await delay(2000);
      await axios.post('/api/users', data);
      toast.success('Successfully added mail');
      reset();
      setIsSubmitting(false);
    } catch {
      setIsSubmitting(false);
      toast.error('An unexpected error occurred');
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
        {error && <p>{error}</p>}
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <button
        disabled={isSubmitting}
        className='register-email-form__registerBTN'
      >
        {isSubmitting ? (
          <>
            REGISTERING
            <Spinner />
          </>
        ) : (
          'REGISTER MY EMAIL'
        )}
      </button>
      <Toaster position='bottom-center' />
    </form>
  );
}
export default RegisterEmailForm;
