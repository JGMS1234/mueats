'use client';

import { useState } from 'react';
import Cart from '../../public/icons/shoppingCart.svg';
import Image from 'next/image';
import Orders from './Orders';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

export default function ShoppingCart() {
	const { orders } = useCart();
	const [cartOpen, setCartOpen] = useState(false);

	return (
		<>
			<button onClick={() => setCartOpen(!cartOpen)}>
				<Image
					src={Cart}
					alt='Shopping Cart'
					className='size-18 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'
				/>
			</button>

			{cartOpen && (
				<div className='absolute top-20 left-1/2 -translate-x-1/2 w-[95vw] lg:w-160 bg-(--primary-colour) p-4 rounded-2xl shadow-lg z-1000'>
					<h2 className='text-lg font-semibold mb-2 flex items-center justify-between'>
						<span>
							Your Cart ({orders.reduce((sum, order) => sum + order.qty, 0)})
						</span>
						{orders.length > 0 && (
							<span>
								<Link
									href='./orderStatus'
									className='px-4 py-1 rounded-2xl bg-(--secondary-colour)/75 hover:scale-105 active:scale-95 cursor-pointer transition-all ease-in-out duration-300'>
									Place Order
								</Link>
							</span>
						)}
					</h2>
					<div>
						{orders.length === 0 ? (
							<p>Your cart is empty</p>
						) : (
							<Orders data={orders} />
						)}
					</div>
				</div>
			)}
		</>
	);
}
