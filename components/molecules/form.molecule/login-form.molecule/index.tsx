import { Button } from '@/components/atoms/button.atom';
import { Input } from '@/components/atoms/input.atom';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginForm({
  onSubmit,
}: {
  onSubmit?: (data: { email: string; password: string }) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  return (
    <form
      className='space-y-3'
      onSubmit={handleSubmit(data => onSubmit?.(data))}
    >
      <div>
        <Input
          required
          type='email'
          label='Email'
          id='login-email'
          autoComplete='email'
          placeholder='you@example.com'
          error={errors.email?.message}
          {...register('email', { required: 'Email is required' })}
        />
      </div>
      <div>
        <Input
          required
          type='password'
          label='Password'
          id='login-password'
          placeholder='Your password'
          autoComplete='current-password'
          error={errors.password?.message}
          {...register('password', { required: 'Password is required' })}
        />
      </div>
      <Button type='submit' className='w-full mt-2'>
        Login
      </Button>
    </form>
  );
}
