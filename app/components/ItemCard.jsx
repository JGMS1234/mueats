'use client';
import { formatCurrency, formatNumber } from '../lib/utils';
import clsx from 'clsx';

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
				'flex flex-col justify-between text-left drop-shadow-md w-full h-full flex-1 p-4 bg-(--primary-colour)/50 rounded-3xl text-nowrap',
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
					
				</div>
			</div>

			{isWarning && !isEdit && (
				<div className='bg-slate-400/25 text-nowrap absolute fade-in-animation bottom-8 left-[50%] translate-x-[-50%] px-4 rounded-xl backdrop-blur-lg'>
					{warning}
				</div>
			)}
			{(!isWarning || isEdit) && (
				<div className='flex self-center justify-between drop-shadow-lg fade-in-animation mt-2 py-2 px-4 w-full rounded-3xl bg-(--primary-colour)/75 backdrop-blur-lg'>
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
