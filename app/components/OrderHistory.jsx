'use client';
import { useState } from 'react';
import OrderCard from './OrderCard';
import ItemCard from './ItemCard';
import Image from 'next/image';
import Backdrop from '../../public/images/Backdrop.png';
import { formatCurrency, formatTime, formatDate } from '../lib/utils';
import clsx from 'clsx';
import SearchBar from './SearchBar';

const OrderHistory = ({ orders }) => {
	const [selectedOrder, setSelectedOrder] = useState(0);
	const [isToggled, setIsToggled] = useState(false);
	const [isWarning, setIsWarning] = useState(false);
	const [warning, setWarning] = useState('');

	const dateOrTIme = (date) => {
		const currentTime = new Date();
		const createdAt = new Date(date);
		if (currentTime.toDateString() == createdAt.toDateString()) {
			return `Created at ${formatTime(createdAt, '24-hour')}`;
		} else {
			return `${formatDate(createdAt)}`;
		}
	};

	return (
		<div className='lg:flex lg:gap-3 h-full w-full'>
			<div className='flex flex-col w-[40%] h-full items-start rounded-2xl gap-3 p-4 bg-(--secondary-colour)/50'>
				<h1 className='font-semibold text-2xl'>Order History</h1>
				<p>Some of your recent orders are shown below</p>
				<SearchBar placeholder={'Search...'} />
				<div className='flex flex-col gap-2 flex-1 mt-6 w-full overflow-y-auto pr-3'>
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
			<div
				className={clsx(
					'w-full h-full lg:w-[60%] pb-3 text-lg rounded-3xl bg-(--secondary-colour)/50',
					[
						!isToggled
							? 'hidden lg:flex flex-col gap-3 items-center'
							: 'flex flex-col gap-3 items-center',
					],
				)}>
				<div className='w-full relative h-[20%] lg:h-[22%]'>
					<Image
						src={Backdrop}
						priority
						alt='Backdrop'
						className='h-[65%] w-full object-cover rounded-t-3xl'
					/>
					<div
						className={clsx(
							'absolute lg:bottom-0 lg:left-3 flex text-base lg:text-lg p-4 w-[90%] drop-shadow-md lg:w-fit rounded-2xl bg-(--primary-colour)/50 backdrop-blur-2xl',
							[isToggled && 'top-6 translate-x-[-49.75%] ml-[50%]'],
						)}>
						<div className='h-10 w-14 lg:h-14 lg:w-20 mr-4 flex items-center justify-center border-solid rounded-sm border border-black'>
							Icon
						</div>
						<div className='flex flex-col text-nowrap max-w-[80%] overflow-y-auto'>
							{orders[selectedOrder].orderName}
							<span className='text-xs lg:text-sm font-semibold'>
								{`${'Main Campus' || orders[selectedOrder].campusName} | ${
									orders[selectedOrder].createdAt.toDateString() ==
									new Date().toDateString()
										? formatDate(orders[selectedOrder].createdAt)
										: 'Created at ' +
											formatTime(orders[selectedOrder].createdAt, '24-hour')
								}`}
							</span>
						</div>
					</div>
					<div className='absolute hidden lg:flex gap-2 drop-shadow-md bottom-0 right-3 px-2 py-1 text-sm font-semibold w-fit bg-(--accent)/75 backdrop-blur-2xl rounded-xl'>
						{`${dateOrTIme(orders[selectedOrder].createdAt)}`}
						<span>|</span>
						<div>Payment Method: {orders[selectedOrder].paymentMethod}</div>
					</div>

					<button className='text-sm absolute drop-shadow-md top-6 right-3 bg-(--primary-colour) backdrop-blur-lg py-2 px-4 cursor-pointer hover:scale-105 active:scale-100 transition-all ease-in-out duration-300 rounded-2xl'>
						Select items to reorder
					</button>
				</div>

				<div
					className={clsx(
						'hidden lg:flex justify-center w-full px-3 relative',
					)}>
					{isWarning && isToggled && (
						<div
							className={clsx(
								'bg-slate-400/25 absolute bottom-6 left-[50%] translate-x-[-50%] w-fit px-4 rounded-lg backdrop-blur-lg',
								[isWarning ? 'fade-in-animation' : 'fade-out-animation'],
							)}>
							{warning}
						</div>
					)}
				</div>

				<div className='relative hidden lg:flex flex-col gap-2 overflow-y-auto flex-1 w-full px-3'>
					<ItemCard
						data={orders[selectedOrder].items}
						currency={orders[selectedOrder].currency}
						isCart={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default OrderHistory;
