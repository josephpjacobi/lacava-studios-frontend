import React, { useState } from "react";
import { NavBar } from "./components/nav-bar/nav-bar";
import { ShopContainer } from "./components/shop-container/shop-container";
import { CartContainer } from "./components/cart-container/cart-container";
import "./app.css";

export interface CartItem {
	id: number;
	description: string;
}

export default function App() {
	const [activeTab, setActiveTab] = useState("Shop Container");
	const [cartItems, setCartItems] = useState<Array<CartItem>>([
		{ id: 1, description: "test product 1" },
		{ id: 2, description: "test product 2" },
		{ id: 3, description: "test product 3" },
		{ id: 4, description: "test product 4" },
		{ id: 5, description: "test product 5" },
	]);

	// function handleCartItems(cartItemToAddOrRemove: CartItem, ) {
	// 	const copyOfCartState = { ...cartItems };
	// }
	function addItemToCart(itemToAdd: CartItem) {
		const copyOfCartState = [...cartItems];
		copyOfCartState.push(itemToAdd);
		setCartItems(copyOfCartState);
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
				// setCartItems={setCartItems}
				// addItemToCart={addItemToCart}
			/>
			<CartContainer activeTab={activeTab} cartItems={cartItems} />
		</div>
	);
}

// Cart Component
// Cart Item Component
