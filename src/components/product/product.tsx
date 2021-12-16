import React from "react";
import { CartItem } from "../../app";
import "./product.css";

interface ProductProps {
	id: number;
	addItemToCart: (itemToAdd: CartItem) => void;
}

export const Product = ({ id, addItemToCart }: ProductProps) => {
	return (
		<div className="product">
			<div
				className="product-image"
				style={{
					backgroundImage: `url(
						"https://cdn.shopify.com/s/files/1/0607/6570/0305/products/IMG_0165_470x.jpg?v=1635547708"
					)`,
				}}
			></div>
			<p>Product 1 Name</p>
			<p>$500</p>
			<button
				type="button"
				onClick={() =>
					addItemToCart({
						id: id,
						description: "new product!",
						quantity: 1,
					})
				}
			>
				Add to Cart
			</button>
		</div>
	);
};
