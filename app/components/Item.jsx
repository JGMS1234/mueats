import React, { Component } from 'react';
import Image from 'next/image';

export class Item extends Component {
	render() {
		const { product } = this.props;
		return (
			<div
				key={product.id}
				className='my-8 w-120 h-30 flex gap-2 relative rounded-4xl items-center py-2 bg-(--primary-colour)'>
				<Image
					className='size-20 absolute left-6 rounded-2xl'
					src={product.image}
					alt={product.name}
				/>
				<span className='pl-30'></span>
				<div className='px-4 py-6 h-30 w-90 bg-(--secondary-colour) rounded-r-2xl flex justify-between items-center'>
					<div>
						<h3>{product.name}</h3>
						<p>{product.description}</p>
						<p>{product.price}</p>
					</div>
					<div>
						<button
							type='button'
							onClick={() => this.props.onAdd(product)}
							className='bg-(--primary-colour) font-bold py-2 px-4 rounded cursor-pointer border border-(--border-colour) hover:scale-100 scale-95 active:scale-95 transition-all duration-200 ease-in-out'>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Item;
