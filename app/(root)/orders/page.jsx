import React from 'react';
import OrderHistory from '../../components/OrderHistory';

const page = () => {
	return <OrderHistory orders={['Order 1', 'Order 2']} />;
};

export default page;
