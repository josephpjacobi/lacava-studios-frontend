import React from "react";
import { Product } from "../product/product";
import { CartItem } from "../../app";
import "./shop-container.css";

interface ShopContainerProps {
	activeTab: string;
	// setCartItems: Dispatch<SetStateAction<CartItem[]>>;
	addItemToCart: (itemToAdd: CartItem) => void;
}

export const ShopContainer = ({
	activeTab,
	// setCartItems,
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
			<div className="shop-container">
				<Product addItemToCart={addItemToCart} />
				<Product addItemToCart={addItemToCart} />
				<Product addItemToCart={addItemToCart} />
				<Product addItemToCart={addItemToCart} />
				<Product addItemToCart={addItemToCart} />
			</div>
		</div>
	);
};
