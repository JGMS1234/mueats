'use client';
import { React, useState } from 'react';
import OrderCard from './OrderCard';

const OrderHistory = ({ orders }) => {
	const [selectedOrder, setSelectedOrder] = useState(0);

	return (
		<div className='md:flex md:gap-3 h-full w-full'>
			<div className='flex flex-col w-[40%] h-full items-start rounded-2xl gap-3 p-4 bg-(--secondary-colour)'>
				<h1 className='font-semibold text-2xl'>Order History</h1>
				<p>Some of your recent orders are shown below</p>
				<span>Search</span>
				<div className='flex flex-col gap-2 h-full w-full overflow-y-auto pr-3'>
					{orders.map((order, index) => (
						<OrderCard
							key={index}
							orderName={order.orderName}
							amount={order.amount}
							currency={order.currency}
							campusName={order.campusName}
							date={order.createdAt}
							orderIdx={index}
							position={selectedOrder}
							onclick={() => setSelectedOrder(index)}
						/>
					))}
				</div>
			</div>
			<div className='flex flex-col gap-3 rounded-2xl w-[60%] h-full p-4 bg-(--secondary-colour)'>
				<h2>Order Details</h2>
				<p>Select an order to view its details.</p>
			</div>
		</div>
	);
};

export default OrderHistory;
