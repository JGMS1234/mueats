'use client';
import { useCart } from '../../context/CartContext';
import Logo from '../../../public/icons/icon.svg';
import { redirect } from 'next/navigation';
import Orders from '../../components/Orders';
import Image from 'next/image';

export default function OrderStatus() {
	const { orders } = useCart();

	if (orders.length === 0) {
		redirect('/home');
	}
	return (
		<div className='flex flex-col gap-3 lg:gap-6 items-center overflow-y-auto'>
			<span className='text-lg lg:text-2xl font-bold'>
				Your Orders ({orders.reduce((sum, order) => sum + order.qty, 0)})
			</span>
			<div className='w-full'>
				<Orders
					data={orders}
					showDelete={false}
				/>
			</div>
			<div className='text-xl bg-(--secondary-colour) lg:h-40 px-6 py-8 rounded-3xl'>
				Name: Steven
				<br></br>
				Delivery address: 10/F Main Campus
				<br></br>
				Phone number: 077 123 4567
			</div>
			<div className='flex items-center gap-3 lg:justify-center'>
				<Image
					src={Logo}
					alt='Logo'
					className='size-24 lg:size-full'
				/>

				<div className='lg:text-lg lg:px-6 lg:py-8 rounded-3xl text-wrap'>
					Thank you for using MU Eats.
					<br />
					Your order is being prepared and will be delivered soon!
				</div>
			</div>
		</div>
	);
}
