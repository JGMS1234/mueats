'use client';

import { useEffect, useState } from 'react';

const THEME_KEY = 'mueats-theme';

const ThemeToggle = () => {
	const [theme, setTheme] = useState(() => {
		if (typeof window === undefined) return "light";

		const savedTheme = window.localStorage.getItem(THEME_KEY);
		return savedTheme === 'light' ? 'light' : 'dark';
	});

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		window.localStorage.setItem(THEME_KEY, theme);
	}, [theme]);

	const handleToggle = () => {
		const nextTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(nextTheme);
	};

	return (
		<button
			type='button'
			onClick={handleToggle}
			aria-label='Toggle theme'
			className='h-10 px-4 rounded-3xl text-xs lg:text-sm font-semibold bg-(--primary-colour) border border-(--border-colour) hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'>
			Toggle theme
		</button>
	);
};

export default ThemeToggle;
