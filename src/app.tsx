import React from "react";
import { ShopContainer } from "./components/shop-container/shop-container";
import "./app.css";

interface CartItem {
	id: number;
	description: string;
}

export default function App() {
	// const [cart, setCart] = useState([]);
	const cart: Array<CartItem> = [];

	const items = [
		{ id: 1, description: "test product 1" },
		{ id: 2, description: "test product 2" },
		{ id: 3, description: "test product 3" },
		{ id: 4, description: "test product 4" },
		{ id: 5, description: "test product 5" },
	];

	console.log(items);

	return (
		<div className="App">
			<nav className="nav-bar">
				<h1>LaCava Studios</h1>
				<h1>Cart {cart.length}</h1>
			</nav>
			<ShopContainer />
			<div className="cart-section">
				<h1 className="cart-title">Cart</h1>
				<div className="cart-container">
					{cart.length < 1 ? (
						<h3></h3>
					) : (
						cart.map((cartItem) => {
							return (
								<div key={cartItem.id}>
									{cartItem.description}
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
}

// Cart Component
// Cart Item Component
