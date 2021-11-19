import React from "react";
import "./product.css";

export const Product = () => {
	return (
		<div className="product">
			<img
				src="https://cdn.shopify.com/s/files/1/0607/6570/0305/products/IMG_0165_470x.jpg?v=1635547708"
				alt="Glass Straws"
			/>
			<p>Product 1 Name</p>
			<p>$500</p>
			<button type="button">Add to Cart</button>
		</div>
	);
};
