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
	return (
		<div className='flex gap-3'>
			<input
				type='email'
				name='email'
				placeholder='Email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type='password'
				name='password'
				placeholder='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<span
				className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
				onClick={() => handleSignIn()}>
				SignIn
			</span>
		</div>
	);
};

export default Login;
