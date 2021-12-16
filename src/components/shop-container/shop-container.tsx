import React from "react";
import { Product } from "../product/product";
import { CartItem } from "../../app";
import "./shop-container.css";

interface ShopContainerProps {
	activeTab: string;
	addItemToCart: (itemToAdd: CartItem) => void;
}

export const ShopContainer = ({
	activeTab,
	addItemToCart,
}: ShopContainerProps) => {
	return (
		<div
			className="shop-section"
			style={{
				display: activeTab === "Shop Container" ? "flex" : "none",
			}}
		>
			<h1 className="shop-title">Shop</h1>
			<div className="products-display">
				<Product id={1} price={1000} addItemToCart={addItemToCart} />
				<Product id={2} price={2000} addItemToCart={addItemToCart} />
				<Product id={3} price={3000} addItemToCart={addItemToCart} />
				<Product id={4} price={4000} addItemToCart={addItemToCart} />
				<Product id={5} price={5000} addItemToCart={addItemToCart} />
				<Product id={6} price={6000} addItemToCart={addItemToCart} />
			</div>
		</div>
	);
};
