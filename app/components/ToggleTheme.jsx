'use client';
import { useEffect, useState } from 'react';

const ToggleTheme = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<button
			className='bg-(--primary-colour) cursor-pointer scale-95 hover:scale-100 active:scale-95 p-3 rounded-full transition-all duration-200 ease-in-out'
			onClick={toggleTheme}>
			Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
		</button>
	);
};

export default ToggleTheme;
