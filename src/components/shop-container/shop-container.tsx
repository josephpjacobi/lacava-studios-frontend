import React from "react";
import { Product } from "../product/product";
import "./shop-container.css";

interface ShopContainerProps {
	activeTab: string;
}

export const ShopContainer = ({ activeTab }: ShopContainerProps) => {
	return (
		<div
			className="shop-section"
			style={{
				display: activeTab === "Shop Container" ? "flex" : "none",
			}}
		>
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
