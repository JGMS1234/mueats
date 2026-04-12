'use client';
import { useState } from 'react';
import { handleAuth } from '../lib/actions';
import Link from 'next/link';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignIn = async () => {
		const response = await handleAuth('login', { email, password });
		if (response?.accessToken) {
			console.log('Successfully signed in:', response);
		} else {
			console.error('Failed to sign in:', response);
		}
	};

	const handleSignUp = async () => {
		return;
	};
	return (
		<div className='flex flex-col lg:flex-row gap-8 lg:py-8 lg:gap-12 lg:justify-center lg:items-center h-full '>
			<div className='flex flex-col items-center gap-12 h-full'>
				<h1 className='font-bold text-2xl text-center'>
					Welcome to MU's #1 food-ordering app
				</h1>

				<p className='text-center text-wrap text-xs lg:text-sm'>
					Your go-to app for ordering from MU's various canteens for pickup or
					delivery. Sign in and look for suggested dishes, or head over to the
					Restaurants tab for more
				</p>
			</div>
			<div className='lg:h-full bg-(--secondary-colour) px-12 py-4 rounded-3xl flex flex-col gap-8 items-center justify-center lg:w-[40vw]'>
				<div className='bg-white w-full h-12 rounded-3xl p-2 pl-12 text-sm flex gap-2 items-center'>
					<input
						className='outline-none border-none bg-transparent w-full'
						type='email'
						name='email'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='bg-white w-full h-12 rounded-3xl p-2 pl-12 text-sm flex gap-2 items-center'>
					<input
						className='outline-none border-none bg-transparent w-full'
						type='password'
						name='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='flex w-full items-center justify-between'>
					<Link
						className='bg-(--primary-colour) text-(--text-colour) py-3 px-8 lg:px-12 rounded-3xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'
						href={'/home'}>
						Sign In
					</Link>
					<Link
						className='bg-(--primary-colour) text-(--text-colour) py-3 px-8 lg:px-12 rounded-3xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'
						href={'/home'}>
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
