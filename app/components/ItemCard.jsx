'use client';
import { formatCurrency, formatNumber } from '../lib/utils';
import Del from '../../public/icons/deleteIcon.svg';
import Image from 'next/image';

const ItemCard = ({ data, currency, isCart, handleOrderDelete }) => {
	return (
		<div className='flex flex-col justify-between text-left drop-shadow-md w-full h-full flex-1 p-4 bg-(--primary-colour)/50 rounded-3xl text-nowrap'>
			<div className='flex flex-col gap-2 pr-2 pb-2 w-full items-center h-[80%] overflow-y-auto relative'>
				<div className='flex justify-between items-center w-full px-2'>
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

					{isCart ? (
						<div className='flex flex-col gap-2 pr-3 text-right'>
							<span className='sticky top-0'>Actions</span>
							{data.map((item, index) => (
								<span
									key={index}
									className='bg-(--accent)/75 self-center py-1 px-4 rounded-2xl hover:scale-105 active:scale-95 cursor-pointer transition-all ease-in-out duration-200'>
									<Image
										src={Del}
										alt='Delete'
										onClick={() => handleOrderDelete(item)}
										className='size-3'
									/>
								</span>
							))}
						</div>
					) : (
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
					)}
				</div>
			</div>

			<div className='flex self-center justify-between drop-shadow-lg fade-in-animation mt-2 py-2 px-4 w-full rounded-3xl bg-(--secondary-colour)/75 backdrop-blur-lg'>
				<span>Grand Total</span>
				<span>
					{formatCurrency(
						data.reduce((total, item) => total + item.qty * item.price, 0),
						currency,
					)}
				</span>
			</div>
		</div>
	);
};

export default ItemCard;
