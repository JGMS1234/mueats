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
		<div className='flex flex-col gap-6 items-center overflow-y-auto'>
			<div className='flex items-center justify-center'>
				<Image
					src={Logo}
					alt='Logo'></Image>

				<div className='text-lg px-6 py-8 rounded-3xl'>
					Thank you for using MU Eats.
					<br></br>
					Your order is being prepared and will be delivered soon!
				</div>
			</div>
			Your Orders ({orders.reduce((sum, order) => sum + order.qty, 0)})
			<div className='w-[60%]'>
				<Orders
					data={orders}
					showDelete={false}
				/>
			</div>
			<div className='text-xl bg-(--secondary-colour) h-40 w-[60%] px-6 py-8 rounded-3xl'>
				Name: Steven
				<br></br>
				Delivery address: 10/F Main Campus
				<br></br>
				Phone number: 077 123 4567
			</div>
		</div>
	);
}
