import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/auth/AuthLayout';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

const signInSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type SignInForm = z.infer<typeof signInSchema>;

export function SignIn() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInForm) => {
    console.log(data);
    navigate('/profile');
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Email address"
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          error={errors.password?.message}
          {...register('password')}
        />

        <div className="flex items-center justify-between">
          <Link
            to="/forgot-password"
            className="text-sm text-gold-500 hover:text-gold-600"
          >
            Forgot your password?
          </Link>
        </div>

        <Button type="submit" className="w-full">
          Sign in
        </Button>

        <p className="text-center text-sm text-gold-500/80">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="text-gold-500 hover:text-gold-600"
          >
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}