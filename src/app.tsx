import React from "react";
import { ShopContainer } from "./components/shop-container/shop-container";
import "./app.css";

export default function App() {
	return (
		<div className="App">
			<nav>
				<h1>LaCava Studios</h1>
			</nav>
			<ShopContainer />
		</div>
	);
}
