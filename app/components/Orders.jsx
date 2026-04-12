import React, { Component } from 'react';
import ItemCard from './ItemCard';
import { useCart } from '../context/CartContext';

export default function Orders({ data, showDelete }) {
	const { DeleteFromOrder } = useCart();

	return (
		<ItemCard
			data={data.map((order) => ({
				id: order.id,
				name: order.name,
				qty: order.qty,
				price: order.price,
			}))}
			currency='HKD'
			isCart={showDelete || showDelete == undefined}
			handleOrderDelete={(order) => DeleteFromOrder(order)}
		/>
	);
}
