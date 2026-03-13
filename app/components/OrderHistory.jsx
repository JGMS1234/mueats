'use client';
import { React, useState } from 'react';

const OrderHistory = ({ orders }) => {
	const [selectedOrder, setSelectedOrder] = useState(null);

	return (
		<div className='md:flex md:gap-3 h-full w-full'>
			<div className='flex flex-col w-[40%] h-full items-start rounded-2xl gap-3 p-4 bg-lime-50'>
				<h1 className='font-semibold text-2xl'>Order History</h1>
				<p>Some of your recent orders are shown below</p>
				<span>Search</span>
				{orders.map((order, index) => (
					<div
						key={index}
						onClick={() => setSelectedOrder(index)}>
						{order}
					</div>
				))}
			</div>
			<div className='flex flex-col gap-3 rounded-2xl w-[60%] h-full p-4 bg-lime-50'>
				<h2>Order Details</h2>
				<p>Select an order to view its details.</p>
			</div>
		</div>
	);
};

export default OrderHistory;
