'use client';
import { formatCurrency, formatTime, formatDate } from '../lib/utils';
import clsx from 'clsx';
import FoodLogo from '../(root)/icon.svg';
import Image from 'next/image';

const OrderCard = ({
	orderName,
	amount,
	currency,
	campusName,
	date,
	onclick,
	position,
	orderIdx,
}) => {
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
		<div
			className={clsx(
				'flex items-center justify-center w-full h-[25vh] rounded-3xl cursor-pointer drop-shadow-md scale-95 active:scale-100 transition-all ease-in-out duration-300',
				[position == orderIdx && 'scale-100'],
				[position != orderIdx && 'hover:scale-94 opacity-85 hover:opacity-100'],
			)}
			onClick={() => onclick()}>
			<div className='h-full w-[20%] py-2 px-4 flex items-center justify-center rounded-l-3xl bg-(--primary-colour)'>
				<Image
					src={FoodLogo}
					alt='Icon'
					className='size-16 hover:scale-[1.025] active:scale-100 rounded-2xl transition-all ease-in-out duration-300'
				/>
			</div>

			<div className='flex flex-col gap-2 w-[80%] h-full justify-center bg-(--primary-colour)/50 rounded-r-3xl py-2 px-4'>
				<div className='flex justify-between'>
					<span className='hidden md:inline px-1 text-[16px] text-nowrap'>
						{orderName.length <= 13
							? orderName
							: `${orderName.slice(0, 11)}...`}
					</span>
					<span className='md:hidden px-1 text-[16px] text-nowrap'>
						{orderName.length <= 10 ? orderName : `${orderName.slice(0, 8)}...`}
					</span>
					<span className='px-1 text-[16px] text-nowrap'>
						{formatCurrency(amount, currency)}
					</span>
				</div>
				<div className='flex justify-between'>
					<span className='px-1 text-sm font-medium'>{dateOrTIme(date)}</span>
					<span className='px-1 text-sm font-medium'>{campusName}</span>
				</div>
			</div>
		</div>
	);
};

export default OrderCard;
