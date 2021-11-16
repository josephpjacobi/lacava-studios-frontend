import React from "react";
import { ShopContainer } from "./components/shop-container/shop-container";
import "./app.css";

export default function App() {
	// const [products, setProducts] = useState({});
	return (
		<div className="App">
			{/* Nav Bar */}
			<nav>
				<h1>LaCava Studios</h1>
			</nav>
			<ShopContainer />
		</div>
	);
}
