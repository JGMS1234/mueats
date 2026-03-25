import React, { Component } from "react";
import ItemCard from './ItemCard'

export class Orders extends Component {
    render() {
        const { order } = this.props
        return (
            <ItemCard 
                data={[{ name: order.name, qty: order.qty, price: order.price }]}
                currency="HKD"
                isWarning={false}
                isEdit={false}
                show={true}
            />
        )
    }
}

export default Orders