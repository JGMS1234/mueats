'use client';

import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
	const [orders, setOrders] = useState([]);
	const [activeOrder, setActiveOrder] = useState(null);
	const [isActiveOrder, setIsActiveOrder] = useState(false);

	function AddToOrder(item) {
		setOrders((prevOrders) => {
			const existing = prevOrders.find((order) => order.id === item.id);
			if (existing) {
				return prevOrders.map((order) =>
					order.id === item.id ? { ...order, qty: order.qty + 1 } : order,
				);
			}

			return [...prevOrders, { ...item, qty: 1 }];
		});
	}

	function ClearOrder() {
		setOrders([]);
		setActiveOrder(null);
		setIsActiveOrder(false);
	}

	function DeleteFromOrder(item) {
		setOrders((prevOrders) => {
			const existing = prevOrders.find((order) => order.id === item.id);
			if (existing && existing.qty > 1) {
				return prevOrders.map((order) =>
					order.id === item.id ? { ...order, qty: order.qty - 1 } : order,
				);
			}

			return prevOrders.filter((order) => order.id !== item.id);
		});
	}

	function PlaceOrder() {
		if (orders.length > 0) {
			setActiveOrder({
				orderName: 'Order 1',
				amount: orders.reduce(
					(total, item) => total + item.price * item.qty,
					0,
				),
				campusName: 'MC',
				currency: 'HK$',
				createdAt: new Date(),
				status: 'Preparing',
				paymentMethod: 'MU Coin',
				items: orders,
			});
			setIsActiveOrder(true);
		}
	}
	return (
		<CartContext.Provider
			value={{
				orders,
				AddToOrder,
				DeleteFromOrder,
				ClearOrder,
				isActiveOrder,
				PlaceOrder,
				activeOrder,
			}}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	return useContext(CartContext);
}
