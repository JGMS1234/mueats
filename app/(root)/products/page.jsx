'use client';

import React, { useState } from 'react';
import picture1 from '../../../public/images/food1.png';
import picture2 from '../../../public/images/food2.png';
import picture3 from '../../../public/images/food3.png';
import Items from '../../components/Items';
import { useCart } from '../../context/CartContext';

export default function Product() {
	const { AddToOrder } = useCart();
	const [products] = useState([
		{
			id: 1,
			name: 'Product 1',
			description: 'This is product 1',
			image: picture1,
			price: 100,
		},
		{
			id: 2,
			name: 'Product 2',
			description: 'This is product 2',
			image: picture2,
			price: 200,
		},
		{
			id: 3,
			name: 'Product 3',
			description: 'This is product 3',
			image: picture3,
			price: 300,
		},
	]);
	return (
		<div>
			<Items
				products={products}
				onAdd={AddToOrder}
			/>
		</div>
	);
}
