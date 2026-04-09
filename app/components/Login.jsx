'use client';
import { useState } from 'react';
import { handleAuth } from '../lib/actions';

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
		return
	};
	return (
		<div className='flex gap-12 justify-center'>
					<div className='flex flex-col items-center gap-12 py-8 h-full w-[35%]'>
						<h1 className='font-bold text-2xl mr-18'>
							Welcome to MU's #1 food-ordering app
						</h1>
						
						<p>
							Your go-to app for ordering from MU's various canteens for pickup or
							delivery. Sign in and look for suggested dishes, or head over to the
							Restaurants tab for more
						</p>
						<div className='h-[80%]'></div>
					</div>
					<div className='bg-(--secondary-colour) border border-(--border-colour) w-[35%] h-[420px] px-12 py-4 rounded-3xl flex flex-col items-start justify-center'>
					<div className='flex flex-col gap-8 w-[80%] items-center'>
					<div className='w-full flex gap-2 py-3 px-4 cursor-pointer whitespace-nowrap'>
						
						<div className='bg-(--input-colour) border border-(--border-colour) w-[100%] h-12 rounded-3xl p-2 pl-12 text-sm flex gap-2 items-center'>
							<input
								className='outline-none border-none bg-transparent w-full'
								type='email'
								name='email'
								placeholder='Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div className='w-full flex gap-2 py-3 px-4 cursor-pointer whitespace-nowrap'>
						<div className='bg-(--input-colour) border border-(--border-colour) w-[100%] h-12 rounded-3xl p-2 pl-12 text-sm flex gap-2 items-center'>
							<input
							className='outline-none border-none bg-transparent w-full'
								type='password'
								name='password'
								placeholder='Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<div className='flex justify-between'>
						<button className='bg-(--primary-colour) mt-6 w-40 h-12 ml-6 rounded-3xl cursor-pointer border border-(--border-colour) hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
							<span
								className='px-4 py-2 rounded-md cursor-pointer'
								onClick={() => handleSignIn()}>
								Sign In
							</span>
						</button>
						<button className='bg-(--primary-colour) ml-12 mt-6 w-40 h-12 rounded-3xl cursor-pointer border border-(--border-colour) hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'>
						<span
							className='px-4 py-2 rounded-md cursor-pointer'
							onClick={handleSignUp}>
							Sign Up
						</span>
					</button>
					</div>
					</div>
				</div>
		</div>
	);
};

export default Login;
