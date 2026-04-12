'use client';
import OrderHistory from '../../components/OrderHistory';
import { useCart } from '../../context/CartContext';

const page = () => {
	const { activeOrder, isActiveOrder } = useCart();

	if (window == undefined) return null;

	return (
		<OrderHistory
			orders={
				isActiveOrder
					? [
							{ ...activeOrder, isActive: true },
							{
								orderName: 'Order 1',
								amount: 10.99,
								currency: 'HK$',
								campusName: 'MC',
								createdAt: new Date(),
								paymentMethod: 'Credit Card',
								items: [
									{
										name: 'Burger',
										qty: 2,
										price: 5.49,
									},
								],
							},
							{
								orderName: 'Order 2',
								amount: 15.5,
								currency: 'HK$',
								campusName: 'JCC',
								createdAt: new Date(),
								paymentMethod: 'Credit Card',
								items: [
									{
										name: 'Fries',
										qty: 1,
										price: 3.99,
									},
								],
							},
							{
								orderName: 'Order 3',
								amount: 50.5,
								currency: 'HK$',
								campusName: 'IOH',
								createdAt: new Date(),
								paymentMethod: 'Credit Card',
								items: [
									{
										name: 'Fries',
										qty: 1,
										price: 3.99,
									},
								],
							},
							{
								orderName: 'Order 4',
								amount: 50.5,
								currency: 'HK$',
								campusName: 'IOH',
								createdAt: new Date(),
								paymentMethod: 'Credit Card',
								items: [
									{
										name: 'Fries',
										qty: 1,
										price: 3.99,
									},
								],
							},
						]
					: [
							{
								orderName: 'Order 1',
								amount: 10.99,
								currency: 'HK$',
								campusName: 'MC',
								createdAt: new Date(),
								paymentMethod: 'Credit Card',
								items: [
									{
										name: 'Burger',
										qty: 2,
										price: 5.49,
									},
								],
							},
							{
								orderName: 'Order 2',
								amount: 15.5,
								currency: 'HK$',
								campusName: 'JCC',
								createdAt: new Date(),
								paymentMethod: 'Credit Card',
								items: [
									{
										name: 'Fries',
										qty: 1,
										price: 3.99,
									},
								],
							},
							{
								orderName: 'Order 3',
								amount: 50.5,
								currency: 'HK$',
								campusName: 'IOH',
								createdAt: new Date(),
								paymentMethod: 'Credit Card',
								items: [
									{
										name: 'Fries',
										qty: 1,
										price: 3.99,
									},
								],
							},
							{
								orderName: 'Order 4',
								amount: 50.5,
								currency: 'HK$',
								campusName: 'IOH',
								createdAt: new Date(),
								paymentMethod: 'Credit Card',
								items: [
									{
										name: 'Fries',
										qty: 1,
										price: 3.99,
									},
								],
							},
						]
			}
		/>
	);
};

export default page;
