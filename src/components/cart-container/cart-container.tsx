import React from "react";
import { CartItem } from "../../app";
import { CartItemDisplay } from "../cart-item/cart-item";
import "./cart-container.css";

interface CartContainerProps {
	activeTab: string;
	cartItems: Array<CartItem>;
	removeItemFromCart: (itemToRemove: CartItem) => void;
}

export const CartContainer = ({
	activeTab,
	cartItems,
	removeItemFromCart,
}: CartContainerProps) => {
	function calculateTotalCost(itemsInCart: CartItem[]): number {
		return itemsInCart.reduce(function (acc, current) {
			return acc + current.price;
		}, 0);
	}

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
								cartItem={cartItem}
								removeItemFromCart={removeItemFromCart}
							/>
						);
					})
				)}
				<div className="checkout-section">
					<h4>Total: ${calculateTotalCost(cartItems) / 100}</h4>
					<button>Checkout</button>
				</div>
			</div>
		</div>
	);
};
