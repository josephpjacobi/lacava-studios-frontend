import React, { useState } from "react";
import { NavBar } from "./components/nav-bar/nav-bar";
import { ShopContainer } from "./components/shop-container/shop-container";
import { CartContainer } from "./components/cart-container/cart-container";
import "./app.css";

export interface CartItem {
	id: number;
	description: string;
	quantity: number;
	price: number;
}

export default function App() {
	const [activeTab, setActiveTab] = useState("Shop Container");
	const [cartItems, setCartItems] = useState<Array<CartItem>>([
		{ id: 1, description: "test product 1", quantity: 1, price: 1000 },
		{ id: 2, description: "test product 2", quantity: 1, price: 2000 },
		{ id: 3, description: "test product 3", quantity: 1, price: 3000 },
		{ id: 4, description: "test product 4", quantity: 1, price: 4000 },
		{ id: 5, description: "test product 5", quantity: 1, price: 5000 },
	]);

	function addItemToCart(itemToAdd: CartItem) {
		const copyOfCartState = [...cartItems];

		function checkCartItems(item: CartItem): boolean {
			return item.id === itemToAdd.id;
		}

		if (copyOfCartState.some(checkCartItems)) {
			const updatedState = copyOfCartState.map((cartItem) => {
				if (cartItem.id === itemToAdd.id) {
					cartItem.quantity = cartItem.quantity + itemToAdd.quantity;
				}
				return cartItem;
			});
			setCartItems(updatedState);
		} else {
			copyOfCartState.push(itemToAdd);
			setCartItems(copyOfCartState);
		}
	}

	function removeItemFromCart(itemToRemove: CartItem) {
		const copyOfCartState = [...cartItems];
		const updatedCart: CartItem[] = copyOfCartState.filter(
			(item) => item.id !== itemToRemove.id
		);
		setCartItems(updatedCart);
	}

	function countCartItems(cartItems: CartItem[]): number {
		return cartItems.reduce(function (acc, obj) {
			return acc + obj.quantity;
		}, 0);
	}

	return (
		<div className="App">
			<NavBar
				setActiveTab={setActiveTab}
				numberOfCarItems={countCartItems(cartItems)}
			/>
			<ShopContainer
				activeTab={activeTab}
				addItemToCart={addItemToCart}
			/>
			<CartContainer
				activeTab={activeTab}
				cartItems={cartItems}
				removeItemFromCart={removeItemFromCart}
			/>
		</div>
	);
}
