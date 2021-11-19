import React from "react";
import { Product } from "../product/product";
import "./shop-container.css";

export const ShopContainer = () => {
	return (
		<div className="shop-section">
			<h1 className="shop-title">Shop</h1>
			<div className="shop-container">
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	);
};
