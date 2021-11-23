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
	const [cartItems, setCartItems] = useState<Array<CartItem>>([]);

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
			<ShopContainer activeTab={activeTab} />
			<CartContainer activeTab={activeTab} cartItems={cartItems} />
		</div>
	);
}

// Cart Component
// Cart Item Component
