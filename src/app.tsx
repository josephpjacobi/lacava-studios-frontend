import React, { useState } from "react";
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

	return (
		<div className="App">
			<button
				style={{ display: "none" }}
				onClick={() => setCartItems([])}
			></button>
			<nav className="nav-bar">
				<h1 onClick={() => setActiveTab("Shop Container")}>
					LaCava Studios
				</h1>
				<h1 onClick={() => setActiveTab("Cart")}>
					Cart {cartItems.length}
				</h1>
			</nav>
			<ShopContainer activeTab={activeTab} setCartItems={setCartItems} />
			<CartContainer activeTab={activeTab} cartItems={cartItems} />
		</div>
	);
}

// Cart Component
// Cart Item Component
