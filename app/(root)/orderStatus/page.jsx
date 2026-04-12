'use client'
import { useCart } from '../../context/CartContext';
import Orders from '../../components/Orders';
import Link from 'next/link';

export default function OrderStatus() {
	const { orders } = useCart();
	return (

		<div>
		Your Orders ({orders.reduce((sum, order) => sum + order.qty, 0)})
		<div className='my-12 w-[60%]'>
			<Orders data={orders} />
		</div>
		<div className='text-xl bg-(--secondary-colour) h-40 w-[60%] px-6 py-8 mb-12 rounded-3xl'>
			Name: Steven 
			<br></br>
			Delivery address: 10/F Main Campus 
			<br></br>
			Phone number: 077 123 4567

		</div>
		<Link 
		href='/orderSet'
		className='flex items-center justify-center w-60 h-12 rounded-3xl bg-(--primary-colour)/75 hover:scale-105 active:scale-95 cursor-pointer transition-all ease-in-out duration-300'>
			Purchase and order
		</Link>

		</div>

	)

};

