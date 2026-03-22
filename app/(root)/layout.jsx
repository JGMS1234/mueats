import { Inter } from 'next/font/google';
import MenuBar from '../components/MenuBar';
import LocationField from '../components/LocationField';
import User from '../components/User';
import Logo from '../../public/icons/icon.svg';
import UserIco from '../../public/icons/userIcon.svg';
import Image from 'next/image';
import './globals.css';
import ShoppingCard from '../components/ShoppingCart'
import { CartProvider } from '../context/CartContext';


const FontInter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

export const metadata = {
	title: 'MU Eats',
	description: "MU's #1 food ordering app for pickup and delivery.",
};

export default function RootLayout({ children }) {

	return (
		<html lang='en'>

			<body
				className={`${FontInter.variable} antialiased flex flex-col-reverse sm:flex-col gap-6 mx-12 mt-2`}>
				<CartProvider>
				<nav className='flex justify-between items-center w-full h-[10vh]'>
					<Image
						src={Logo}
						alt='MU Eats Logo'
						className='size-22 md:size-28'
						priority
					/>
					<div className='flex items-center gap-8'>
						<MenuBar />
						<LocationField />
						<ShoppingCard />

						<Image
							src={UserIco}
							alt='User icon'
							className='size-12 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'
						/>
					</div>
				</nav>
				
				<main className='h-[80vh] overflow-y-auto'>{children}</main>
				</CartProvider>
			</body>
		</html>
	);
}
