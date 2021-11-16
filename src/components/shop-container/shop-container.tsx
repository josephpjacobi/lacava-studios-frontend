import React from "react";
import "./shop-container.css";

export const ShopContainer = () => {
	// this needs to be async
	// const fetchProductsForSale = () => {
	// 	// fetch products
	// };

	return (
		<div className="shop-section">
			<h1 className="shop-title">Shop</h1>
			<div className="shop-container">
				<div className="product-1"></div>
				<div className="product-2"></div>
				<div className="product-3"></div>
				<div className="product-4"></div>
				<div className="product-5"></div>
			</div>
		</div>
	);
};
