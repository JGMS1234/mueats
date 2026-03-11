'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const MenuBar = () => {
	const [currentPage, setCurrentPage] = useState('home');

	// useEffect(() => {
	// 	const path = usePathname();
	// 	const page = path.split('/')[-1] || 'home';
	// 	setCurrentPage(page);
	// }, [usePathname()]);
	return (
		<div className='flex gap-8 items-center'>
			<span
				className={clsx([
					currentPage == 'home' && 'rounded-2xl p-2 bg-(--primary-colour)',
				])}>
				Home
			</span>
			<span>Restaurants</span>
			<span>Orders</span>
		</div>
	);
};

export default MenuBar;
