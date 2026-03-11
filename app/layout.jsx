import { Geist, Geist_Mono } from 'next/font/google';
import MenuBar from './components/MenuBar';
import Logo from './icon.svg';
import Image from 'next/image';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	title: 'MU Eats',
	description: "MU's #1 food ordering app for pickup and delivery.",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col-reverse sm:flex-col mx-12`}>
				<nav className='flex justify-between items-center w-full h-[10vh]'>
					<Image
						src={Logo}
						alt='MU Eats Logo'
						className='size-22 md:size-28'
					/>
					<MenuBar />
					<span className='rounded-full p-2 bg-green-400'>
						<span className='w-12 h-12 bg-red-300'></span>
					</span>
				</nav>
				<main className='h-[80vh]'>{children}</main>
			</body>
		</html>
	);
}
