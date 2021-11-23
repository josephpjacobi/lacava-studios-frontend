import React from "react";
import { CartItem } from "../../app";
import { CartItemDisplay } from "../cart-item/cart-item";
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
							<CartItemDisplay
								key={cartItem.id}
								id={cartItem.id}
								description={cartItem.description}
							/>
						);
					})
				)}
				<div className="checkout-section">
					<h4>Total: TOTAL</h4>
					<button>Checkout</button>
				</div>
			</div>
		</div>
	);
};
