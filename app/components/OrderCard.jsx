'use client';
import { formatCurrency, formatTime, formatDate } from '../lib/utils';
import clsx from 'clsx';

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
				'flex items-center justify-center w-full px-4 py-5 gap-4 rounded-3xl cursor-pointer scale-85 opacity-65 active:scale-100 transition-all ease-in-out duration-300',
				[
					position == orderIdx && window.innerWidth > 768
						? 'scale-100 opacity-100 hover:opacity-100 bg-(--primary-colour)'
						: 'scale-95 opacity-100 bg-(--primary-colour)',
				],
				[
					position != orderIdx &&
						'bg-(--primary-colour)/75 hover:bg-(--primary-colour) hover:scale-85',
				],
			)}
			onClick={() => onclick()}>
			<div className='h-14 w-20 flex items-center justify-center hover:scale-[1.025] active:scale-100 border-solid rounded-sm border border-slate-50 transition-all ease-in-out duration-300'>
				Icon
			</div>
			<div className='flex flex-col gap-2 w-72'>
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
