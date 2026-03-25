'use client';
import Item from './Item';
import React, { Component } from 'react';

export class Items extends Component {
	render() {
		return (
			<div>
				{this.props.products.map((product) => (
					<Item
						key={product.id}
						product={product}
						onAdd={this.props.onAdd}
					/>
				))}
			</div>
		);
	}
}

export default Items;
