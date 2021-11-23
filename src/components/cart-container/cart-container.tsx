import React from "react";
import { CartItem } from "../../app";
import "./cart-container.css";

interface CartContainerProps {
	activeTab: string;
	cartItems: Array<CartItem>;
}

const items = [
	{ id: 1, description: "test product 1" },
	{ id: 2, description: "test product 2" },
	{ id: 3, description: "test product 3" },
	{ id: 4, description: "test product 4" },
	{ id: 5, description: "test product 5" },
];

console.log(items);

export const CartContainer = ({ activeTab, cartItems }: CartContainerProps) => {
	return (
		<div
			className="cart-section"
			style={{
				display: activeTab === "Cart" ? "flex" : "none",
			}}
		>
			<h1 className="cart-title">Cart</h1>
			<div className="cart-container">
				{cartItems.length < 1 ? (
					<h3>Cart is Empty!</h3>
				) : (
					cartItems.map((cartItem) => {
						return (
							<div key={cartItem.id}>{cartItem.description}</div>
						);
					})
				)}
			</div>
		</div>
	);
};
