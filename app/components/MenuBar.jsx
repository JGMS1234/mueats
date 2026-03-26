'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ShoppingCart from '../../public/icons/shoppingCart.svg';
import clsx from 'clsx';

const MenuBar = ({ isMobile }) => {
	const [currentPage, setCurrentPage] = useState('home');

	useEffect(() => {
		const currPage = window.location.pathname.split('/').pop() || 'home';
		setCurrentPage(currPage);
	}, [usePathname()]);
	return (
		<div
			className={clsx(
				[!isMobile && 'hidden lg:flex lg:gap-8 items-center lg:mr-[10vw]'],
				[
					isMobile &&
						'flex fixed bottom-0 py-3 justify-evenly items-center bg-(--secondary-colour) w-full',
				],
			)}>
			<Link
				href='/'
				className={clsx(
					'hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out',
					[
						currentPage == 'home' &&
							'rounded-3xl py-2 px-4 bg-(--primary-colour)',
					],
				)}>
				Home
			</Link>
			<Link
				href='/restaurants'
				className={clsx(
					'hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out',
					[
						currentPage == ('restaurants' || 'products') &&
							'rounded-3xl py-2 px-4 bg-(--primary-colour)',
					],
				)}>
				Restaurants
			</Link>
			<Link
				href='/orders'
				className={clsx(
					'hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out',
					[
						currentPage == 'orders' &&
							'rounded-3xl py-2 px-4 bg-(--primary-colour)',
					],
				)}>
				Orders
			</Link>
		</div>
	);
};

export default MenuBar;
