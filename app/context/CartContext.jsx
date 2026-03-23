'use client'

import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({children}) {
    const [orders, setOrders] = useState([])

    function AddToOrder(item) {
        setOrders( prevOrders => {
            const existing = prevOrders.find(order => order.id === item.id)
            if(existing) {
                return prevOrders.map(order =>
                        order.id === item.id ? {...order, qty: order.qty + 1} : order
                    )
            }

            return [...prevOrders, {...item, qty: 1}]
        },)
    }

    function DeleteFromOrder(item) {
        setOrders(prevOrders => {
        const existing = prevOrders.find(order => order.id === item.id)
        if(existing && existing.qty > 1) {
            return prevOrders.map(order =>
                order.id === item.id ? {...order, qty: order.qty - 1} : order
            )
        }
        
        return prevOrders.filter(order => order.id !== item.id)
    });
}

    return (
        <CartContext.Provider value={{orders, AddToOrder, DeleteFromOrder}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext);
}