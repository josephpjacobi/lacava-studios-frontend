import React, { Dispatch, SetStateAction } from "react";
import { CartItem } from "../../app";
import "./product.css";

interface ProductProps {
	setCartItems: Dispatch<SetStateAction<CartItem[]>>;
}

export const Product = ({ setCartItems }: ProductProps) => {
	return (
		<div className="product">
			<img
				src="https://cdn.shopify.com/s/files/1/0607/6570/0305/products/IMG_0165_470x.jpg?v=1635547708"
				alt="Glass Straws"
			/>
			<p>Product 1 Name</p>
			<p>$500</p>
			<button
				type="button"
				onClick={() =>
					setCartItems([{ id: 1, description: "new product!" }])
				}
			>
				Add to Cart
			</button>
		</div>
	);
};
