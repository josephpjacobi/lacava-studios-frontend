import React, { Dispatch, SetStateAction } from "react";
import { Product } from "../product/product";
import { CartItem } from "../../app";
import "./shop-container.css";

interface ShopContainerProps {
	activeTab: string;
	setCartItems: Dispatch<SetStateAction<CartItem[]>>;
}

export const ShopContainer = ({
	activeTab,
	setCartItems,
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
				<Product setCartItems={setCartItems} />
				<Product setCartItems={setCartItems} />
				<Product setCartItems={setCartItems} />
				<Product setCartItems={setCartItems} />
				<Product setCartItems={setCartItems} />
			</div>
		</div>
	);
};
