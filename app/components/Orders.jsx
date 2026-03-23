import React, { Component } from "react";
import ItemCard from './ItemCard'
import { useCart } from '../context/CartContext';


export default function Orders( {order} ) {
    const { DeleteFromOrder } = useCart();

        return (
            <ItemCard 
                data={[{ name: order.name, qty: order.qty, price: order.price }]}
                currency="HKD"
                isCart={true}
                isWarning={false}
                isEdit={false}
                show={true}
                handleOrderDelete = {() => DeleteFromOrder(order)}
            />
        );
}
