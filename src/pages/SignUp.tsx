import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/auth/AuthLayout';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

const signUpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignUpForm = z.infer<typeof signUpSchema>;

export function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpForm) => {
    console.log(data);
    navigate('/profile');
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start your journey with MaxxMAI"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Full name"
          placeholder="Enter your full name"
          error={errors.name?.message}
          {...register('name')}
        />

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
          placeholder="Create a password"
          error={errors.password?.message}
          {...register('password')}
        />

        <Input
          label="Confirm password"
          type="password"
          placeholder="Confirm your password"
          error={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />

        <Button type="submit" className="w-full">
          Create account
        </Button>

        <p className="text-center text-sm text-gold-500/80">
          Already have an account?{' '}
          <Link
            to="/signin"
            className="text-gold-500 hover:text-gold-600"
          >
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}