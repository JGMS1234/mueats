import React from 'react';
import OrderHistory from '../../components/OrderHistory';

const page = () => {
	return (
		<OrderHistory
			orders={[
				{
					orderName: 'Order 1',
					amount: 10.99,
					currency: 'HK$',
					campusName: 'MC',
					createdAt: new Date(),
				},
				{
					orderName: 'Order 2',
					amount: 15.5,
					currency: 'HK$',
					campusName: 'JCC',
					createdAt: new Date(),
				},
				{
					orderName: 'Order 3',
					amount: 50.5,
					currency: 'HK$',
					campusName: 'IOH',
					createdAt: new Date(),
				},
				{
					orderName: 'Order 4',
					amount: 50.5,
					currency: 'HK$',
					campusName: 'IOH',
					createdAt: new Date(),
				},
			]}
		/>
	);
};

export default page;
