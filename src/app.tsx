import React, { useState } from "react";
import "./app.css";

export default function App() {
	const [products, setProducts] = useState({});
	return (
		<div className="App">
			{/* Nav Bar */}
			<nav>
				<h1>LaCava Studios</h1>
			</nav>
			<div className="shop-container">
				{/* Load all products from db and display */}
			</div>
		</div>
	);
}
