'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const MenuBar = ({ isMobile }) => {
	const [currentPage, setCurrentPage] = useState('');

	useEffect(() => {
		const currPage = window.location.pathname.split('/').pop();
		setCurrentPage(currPage);
	}, [usePathname()]);
	return (
		<div
			className={clsx(
				[
					!isMobile &&
						'hidden lg:flex lg:gap-8 items-center justify-center flex-1',
				],
				[
					isMobile &&
						'flex fixed bottom-0 py-3 justify-evenly items-center bg-(--secondary-colour) w-full',
				],
			)}>
			<Link
				href='/home'
				className={clsx(
					'hover:scale-105 active:scale-95 rounded-3xl transition-all py-2 px-4 duration-200 ease-in-out',
					[currentPage == 'home' && 'bg-(--primary-colour)'],
				)}>
				Home
			</Link>
			<Link
				href='/restaurants'
				className={clsx(
					'hover:scale-105 active:scale-95 rounded-3xl transition-all py-2 px-4 duration-200 ease-in-out',
					[
						(currentPage == 'restaurants' || currentPage == 'products') &&
							'bg-(--primary-colour)',
					],
				)}>
				Restaurants
			</Link>
			<Link
				href='/orders'
				className={clsx(
					'hover:scale-105 active:scale-95 rounded-3xl py-2 px-4 transition-all duration-200 ease-in-out',
					[currentPage.includes('order') && 'bg-(--primary-colour)'],
				)}>
				Orders
			</Link>
		</div>
	);
};

export default MenuBar;
