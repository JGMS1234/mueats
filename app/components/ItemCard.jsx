'use client';
import { formatCurrency, formatNumber } from '@/lib/utils';
import clsx from 'clsx';
import EditIcon from '@/icons/pencil (edit).svg';
import DelIcon from '@/icons/bin 1 (delete).svg';
import React from 'react';

const ItemCard = ({
	data,
	currency,
	handleEditItem,
	handleDeleteItem,
	warning,
	isWarning,
	isEdit,
	show,
}) => {
	return (
		<div
			className={clsx(
				'flex flex-col justify-between text-left w-full h-full flex-1 p-4 bg-slate-400/25 rounded-xl backdrop-blur-lg text-nowrap',
				// [!show && 'pt-10 h-[calc(100%-2rem)]']
			)}>
			<div className='flex flex-col gap-2 pr-2 pb-2 w-full items-center h-[80%] overflow-y-auto relative'>
				<div className='flex justify-between w-full px-2'>
					<div className='flex flex-col gap-2 pr-3'>
						<span className='sticky top-0'>Item Description</span>
						{data.map((item, index) => (
							<span
								key={index}
								className='text-sm font-medium'>
								{item.name}
							</span>
						))}
					</div>
					<div className='flex flex-col gap-2 pr-3 text-right'>
						<span className='sticky top-0'>Qty</span>
						{data.map((item, index) => (
							<span
								key={index}
								className='text-sm font-medium'>
								{formatNumber(item.qty, 'qty')}
							</span>
						))}
					</div>
					<div className='flex flex-col gap-2 pr-3 text-right'>
						<span className='sticky top-0'>{`Unit Price (${currency})`}</span>
						{data.map((item, index) => (
							<span
								key={index}
								className='text-sm font-medium'>
								{formatNumber(item.price)}
							</span>
						))}
					</div>
					<div className='flex flex-col gap-2 pr-3 text-right'>
						<span className='sticky top-0'>{`Total (${currency})`}</span>
						{data.map((item, index) => (
							<span
								key={index}
								className='text-sm font-medium'>
								{formatNumber(item.qty * item.price)}
							</span>
						))}
					</div>
					{show && (
						<div className='flex flex-col gap-2 pl-3'>
							{show && <span className='sticky top-0 self-end'>Action</span>}
							{data.map((_, index) => (
								<div
									key={index}
									className={clsx(
										'text-xs flex items-center',
										[show && 'gap-2'],
										[!show && 'justify-center'],
									)}>
									<span
										onClick={() => handleEditItem(index)}
										className='bg-linear-to-tr from-slate-600 to-stone-800 px-2 py-1 rounded-md hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'>
										<EditIcon />
									</span>
									{show && (
										<span
											onClick={() => handleDeleteItem(index)}
											className='bg-linear-to-tr from-slate-600 to-stone-800 px-2 py-1 rounded-md hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'>
											<DelIcon />
										</span>
									)}
								</div>
							))}
						</div>
					)}
				</div>
			</div>

			{isWarning && !isEdit && (
				<div className='bg-slate-400/25 text-nowrap absolute fade-in-animation bottom-8 left-[50%] translate-x-[-50%] px-4 rounded-xl backdrop-blur-lg'>
					{warning}
				</div>
			)}
			{(!isWarning || isEdit) && (
				<div className='flex self-center justify-between fade-in-animation mt-2 p-2 w-full rounded-xl bg-linear-to-tr from-slate-700 to-stone-500'>
					<span>Grand Total</span>
					<span>
						{formatCurrency(
							data.reduce((total, item) => total + item.qty * item.price, 0),
							currency,
						)}
					</span>
				</div>
			)}
		</div>
	);
};

export default ItemCard;
