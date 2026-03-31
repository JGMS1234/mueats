import { Inter } from 'next/font/google';
import MenuBar from '../components/MenuBar';
import LocationField from '../components/LocationField';
import Logo from '../../public/icons/icon.svg';
import UserIco from '../../public/icons/userIcon.svg';
import Image from 'next/image';
import './globals.css';
import ShoppingCard from '../components/ShoppingCart';
import Link from 'next/link';
import { CartProvider } from '../context/CartContext';
import ActiveOrder from '../components/ActiveOrder';

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
				className={`${FontInter.variable} antialiased relative flex flex-col text-sm lg:text-base gap-2 lg:gap-6 lg:mx-12 mt-2`}>
				<CartProvider>
					<nav className='mx-4 lg:mx-0 flex sticky top-2 left-0 lg:relative justify-between items-center lg:w-full h-[10vh]'>
						<Image
							src={Logo}
							alt='MU Eats Logo'
							className='size-28'
							priority
						/>
						<div className='flex items-center gap-3 lg:gap-8'>
							<MenuBar />
							<LocationField />
							<ShoppingCard />
							<Link href='./settings'>
								<Image
									src={UserIco}
									alt='User icon'
									className='size-12 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'
								/>
							</Link>
						</div>
					</nav>
					<main className='h-[70vh] lg:h-[80vh] mx-4 lg:mx-4 py-2 lg:py-0 overflow-y-auto'>
						{children}
						<ActiveOrder />
					</main>
					<div className='h-[15vh] w-full lg:hidden'>
						<MenuBar isMobile={true} />
					</div>
				</CartProvider>
			</body>
		</html>
	);
}
