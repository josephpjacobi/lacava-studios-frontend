import React from "react";
import { CartItem } from "../../app";
import "./cart-item.css";

interface CartItemProps {
	cartItem: CartItem;
	removeItemFromCart: (itemToRemove: CartItem) => void;
}

// CartItemDisplay component name needs to be changed
export const CartItemDisplay = ({
	cartItem,
	removeItemFromCart,
}: CartItemProps) => {
	return (
		<div className="cart-item-container">
			<h3>Name: Product Name</h3>
			<h5>Quantity: Quantity</h5>
			<p>{cartItem.description}</p>
			<button onClick={() => removeItemFromCart(cartItem)}>Remove</button>
		</div>
	);
};
