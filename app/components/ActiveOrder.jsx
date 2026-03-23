'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { formatCurrency, formatDate, formatTime } from '../lib/utils';
import clsx from "clsx";

export default function ActiveOrder() {
	const router = useRouter();
	const pathname = usePathname();

	const [activeOrder, setActiveOrder] = useState({
		orderName: 'Order 1',
		amount: 10.99,
		currency: 'HK$',
		campusName: 'MC',
		createdAt: new Date(),
		status: 'Delivering',
		paymentMethod: 'Credit Card',
		items: [
			{
				name: 'Burger',
				qty: 2,
				price: 5.49,
			},
		],
	});
	const [closing, setClosing] = useState(false);

	if (!activeOrder || pathname === "/orders") return null;

	const clearActiveOrder = () => {
		setClosing(true);
		setTimeout(() => setActiveOrder(null), 300);
	}
	const showOrder = () => router.push('/orders');

	const createdAt = activeOrder.createdAt;
	const createdToday = createdAt && createdAt.toDateString() === new Date().toDateString();

	const timestampLabel = createdToday
			? "Created at " + formatTime(createdAt, '24-hour')
			: formatDate(createdAt);

	return (
		<div className={clsx(
			"fixed z-1000 bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 w-[92vw] max-w-225 px-4 py-3 rounded-3xl bg-(--secondary-colour)/80 backdrop-blur-2xl drop-shadow-lg transition-all duration-300 ease-in-out",
			closing ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
		)}>
			<div className='flex flex-col gap-1 overflow-hidden'>
				<div className='text-sm font-semibold text-nowrap truncate'>
					{activeOrder.orderName} - {activeOrder.status}
				</div>
				<div className='text-xs opacity-80 flex gap-2 flex-wrap'>
					{activeOrder.campusName} • {activeOrder.paymentMethod} • {timestampLabel}
				</div>
			</div>

			<div className='ml-auto flex items-center gap-3'>
				<div className='text-sm font-semibold whitespace-nowrap'>
					{formatCurrency(activeOrder.amount, activeOrder.currency)}
				</div>
				<button
					onClick={showOrder}
					className='text-xs font-semibold px-3 py-2 rounded-2xl bg-(--primary-colour)/80 hover:scale-[1.02] active:scale-95 transition-all duration-200 ease-in-out'>
					Show
				</button>
				<button
					onClick={clearActiveOrder}
					className='text-xs font-semibold px-3 py-2 rounded-2xl bg-(--primary-colour) hover:scale-[1.02] active:scale-95 transition-all duration-200 ease-in-out'>
					Clear
				</button>
			</div>
		</div>
	);
}

