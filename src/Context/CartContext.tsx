import React, { createContext, ReactNode, useReducer, useState } from 'react';
import data from '../products.json'

type cartItem = {
    id: number;
    category: string;
    name: string;
    price: number;
    image: string;
    size: string;
    color: string;
    stockAvailability: boolean;
    count: number;
}

export type CartState = {
    cart: cartItem[];
    productlist: cartItem[];
}

export type CartAction =
    | { type: 'ADD_TO_CART'; payload: cartItem }
    | { type: 'DELETE_FROM_CART'; payload: number }
    | { type: 'INCREASE'; payload: number }
    | { type: 'DECREASE'; payload: number }


const initialState: CartState = {
    cart: [],
    productlist: data,
}

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const product = action.payload;
            const existingItem = state.cart.find((item) => item.id === product.id);

            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, count: item.count + 1 }
                            : item
                    )
                }
            }

            return {
                ...state,
                cart: [...state.cart, { ...product, count: 1 }]
            }
        }
        case 'DELETE_FROM_CART': {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }
        case 'INCREASE': {
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload
                        ? { ...item, count: item.count + 1 }
                        : item
                ),
            };
        }

        case 'DECREASE': {
            return {
                ...state,
                cart: state.cart
                    .map((item) =>
                        item.id === action.payload
                            ? { ...item, count: item.count - 1 }
                            : item
                    )
                    .filter((item) => item.count > 0), // remove if count reaches 0
            };
        }
        default:
            return state;
    }
}

type CartContextType = {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextType | null>(null);

type CartProviderProps = {
    children: ReactNode;
}

const CartProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}
export { CartContext, CartProvider };

