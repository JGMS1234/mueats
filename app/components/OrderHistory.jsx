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
			<div
				className={clsx(
					'flex flex-col w-full lg:w-[40%] h-full items-start rounded-2xl gap-3 p-4 bg-(--secondary-colour)/50',
					[isToggled && 'hidden'],
				)}>
				<h1 className='font-semibold text-2xl'>Order History</h1>
				<p>Some of your recent orders are shown below</p>
				<SearchBar placeholder={'Search...'} />
				<div className='flex flex-col gap-2 flex-1 mt-6 w-full overflow-y-auto pr-3 show-scrollbar'>
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
							onclick={() => {
								setSelectedOrder(index);
								setIsToggled(true);
							}}
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
				<div className='w-full relative h-[35%] lg:h-[22%]'>
					<Image
						src={Backdrop}
						priority
						alt='Backdrop'
						className='h-[55%] lg:h-[65%] w-full object-cover rounded-t-3xl'
					/>
					<div
						className={clsx(
							'absolute lg:bottom-0 lg:left-3 flex text-base lg:text-lg p-4 w-[90%] drop-shadow-md lg:w-fit rounded-2xl bg-(--primary-colour)/50 backdrop-blur-2xl',
							[isToggled && 'top-4 translate-x-[-49.75%] ml-[50%]'],
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

					<div
						className={clsx(
							'absolute flex gap-2 drop-shadow-md bottom-11 lg:bottom-0 lg:right-3 px-2 py-1 text-sm font-semibold w-fit bg-(--accent)/75 backdrop-blur-2xl rounded-xl',
							[isToggled && 'left-3'],
						)}>
						{`${dateOrTIme(orders[selectedOrder].createdAt)}`}
						<span>|</span>
						<div>Payment Method: {orders[selectedOrder].paymentMethod}</div>
					</div>

					<button
						className={clsx(
							'text-sm absolute drop-shadow-md lg:top-6 right-3 bg-(--primary-colour) backdrop-blur-lg py-2 px-4 cursor-pointer hover:scale-105 active:scale-100 transition-all ease-in-out duration-300 rounded-2xl',
							[isToggled && 'bottom-0'],
						)}>
						Select items to reorder
					</button>
					<button
						onClick={() => setIsToggled(false)}
						className={clsx(
							'text-sm absolute lg:hidden drop-shadow-md left-3 bg-(--accent)/75 backdrop-blur-lg py-2 px-4 cursor-pointer hover:scale-105 active:scale-100 transition-all ease-in-out duration-300 rounded-2xl',
							[isToggled && 'bottom-0'],
						)}>
						Close
					</button>
				</div>

				<div className='relative flex flex-col gap-2 overflow-y-auto flex-1 w-full px-3'>
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
