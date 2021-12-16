import React, { useState } from "react";
import { NavBar } from "./components/nav-bar/nav-bar";
import { ShopContainer } from "./components/shop-container/shop-container";
import { CartContainer } from "./components/cart-container/cart-container";
import "./app.css";

export interface CartItem {
	id: number;
	description: string;
	quantity: number;
}

export default function App() {
	const [activeTab, setActiveTab] = useState("Shop Container");
	const [cartItems, setCartItems] = useState<Array<CartItem>>([
		{ id: 1, description: "test product 1", quantity: 1 },
		{ id: 2, description: "test product 2", quantity: 1 },
		{ id: 3, description: "test product 3", quantity: 1 },
		{ id: 4, description: "test product 4", quantity: 1 },
		{ id: 5, description: "test product 5", quantity: 1 },
	]);

	// need to add quantity to cart item type and to quantity when same item is added
	function addItemToCart(itemToAdd: CartItem) {
		const copyOfCartState = [...cartItems];
		copyOfCartState.push(itemToAdd);
		setCartItems(copyOfCartState);
	}

	function removeItemFromCart(itemToRemove: CartItem) {
		const copyOfCartState = [...cartItems];
		const updatedCart: CartItem[] = copyOfCartState.filter(
			(item) => item.id !== itemToRemove.id
		);
		setCartItems(updatedCart);
	}

	return (
		<div className="App">
			<NavBar
				setActiveTab={setActiveTab}
				numberOfCarItems={cartItems.length}
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

// Cart Component
// Cart Item Component
