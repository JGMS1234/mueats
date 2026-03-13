'use client';
import { cn, formatCurrency, formatTime, formatDate } from '@/lib/utils';
import React from 'react';

const OrderCard = ({
	expense_name,
	amount,
	currency,
	category,
	date,
	onclick,
	onKey,
	position,
	expense_Id,
	expenses,
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
			className={cn(
				'flex items-center w-full h-18 mb-2 p-4 gap-4 rounded-xl cursor-pointer scale-[0.975] opacity-65 hover:opacity-85 active:scale-100 transition-all ease-in-out duration-300',
				[
					position == expense_Id && window.innerWidth > 768
						? 'scale-100 opacity-100 hover:opacity-100 bg-slate-600'
						: 'scale-95 opacity-100 bg-linear-to-bl from-stone-800 to-slate-600',
				],
				[
					position != expense_Id &&
						'bg-linear-to-bl from-stone-800 to-slate-600',
				],
			)}
			onClick={() => onclick()}
			onFocus={() => onKey()}>
			<div className='h-14 w-20 flex items-center justify-center hover:scale-[1.025] active:scale-100 border-solid rounded-sm border border-slate-50 transition-all ease-in-out duration-300'>
				Icon
			</div>
			<div className='flex flex-col gap-2 w-72'>
				<div className='flex justify-between'>
					<span className='hidden md:inline px-1 text-[16px] text-nowrap'>
						{expense_name.length <= 13
							? expense_name
							: `${expense_name.slice(0, 11)}...`}
					</span>
					<span className='md:hidden px-1 text-[16px] text-nowrap'>
						{expense_name.length <= 10
							? expense_name
							: `${expense_name.slice(0, 8)}...`}
					</span>
					<span className='px-1 text-[16px] text-nowrap'>
						{formatCurrency(amount, currency)}
					</span>
				</div>
				<div className='flex justify-between'>
					<span className='px-1 text-sm font-medium'>{dateOrTIme(date)}</span>
					<span className='px-1 text-sm font-medium'>{category}</span>
				</div>
			</div>
		</div>
	);
};

export default OrderCard;
