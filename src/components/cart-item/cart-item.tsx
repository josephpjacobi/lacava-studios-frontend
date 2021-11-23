import React from "react";
import { CartItem } from "../../app";
import "./cart-item.css";

// CartItemDisplay component name needs to be changed
export const CartItemDisplay = ({ description }: CartItem) => {
	return (
		<div className="cart-item-container">
			<h3>Name: Product Name</h3>
			<h5>Quantity: Quantity</h5>
			<p>{description}</p>
			<button>Remove</button>
		</div>
	);
};
