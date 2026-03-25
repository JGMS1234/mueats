'use client'

import { useState } from 'react';
import Cart from '../../public/icons/shoppingCart.svg';
import Image from 'next/image';
import Orders from './Orders'
import { useCart } from '../context/CartContext';
import Link from 'next/link';


export default function ShoppingCart( ) {
  
   const { orders } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="relative">

      <button onClick={() => setCartOpen(!cartOpen)}>
        <Image
          src={Cart}
          alt='Shopping Cart'
          className='size-18 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out'
        />
    </button>

      {cartOpen && (
        <div className="absolute top-20 right-0 w-160 bg-(--primary-colour) p-4 rounded-2xl shadow-lg z-50">
            <h2 className="text-lg font-semibold mb-2">
            Your Cart ({orders.reduce((sum, order) => sum + order.qty, 0)})
            </h2>
            <div>
              {orders.length === 0 
                && ( <p>Your cart is empty</p> ) }

              {orders.map((order) => (

                  <Orders key={order.id} order={order} />

                ))}

              {
                orders.length > 0 && (
                <div className="mt-4 flex justify-between font-bold">
                  <span>Total:</span>
                  <span>
                    {orders.reduce((sum, order) => sum + (order.price * order.qty), 0)}
                  </span>
                  <span>
						
							<Link
								href='./OrderProgress'
								className='px-4 py-1 rounded-2xl bg-(--secondary-colour)/75 hover:scale-105 active:scale-95 cursor-pointer transition-all ease-in-out duration-300'>
									Set Order
							</Link>

					</span>
                </div>
              )}
            </div>
        </div>

      )}
      </div>
  );
}