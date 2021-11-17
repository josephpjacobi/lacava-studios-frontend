import React from "react";
import "./shop-container.css";

export const ShopContainer = () => {
	return (
		<div className="shop-section">
			<h1 className="shop-title">Shop</h1>
			<div className="shop-container">
				<div className="product">
					<img
						src="https://cdn.shopify.com/s/files/1/0607/6570/0305/products/IMG_0165_470x.jpg?v=1635547708"
						alt="Glass Straws"
					/>
					<p>Product 1 Name</p>
					<p>$500</p>
				</div>
				<div className="product">
					<img
						src="https://cdn.shopify.com/s/files/1/0607/6570/0305/products/IMG_0165_470x.jpg?v=1635547708"
						alt="Glass Straws"
					/>
					<p>Product 2 Name</p>
					<p>$600</p>
				</div>
				<div className="product">
					<img
						src="https://cdn.shopify.com/s/files/1/0607/6570/0305/products/IMG_0165_470x.jpg?v=1635547708"
						alt="Glass Straws"
					/>
					<p>Product 3 Name</p>
					<p>$700</p>
				</div>
				<div className="product">
					<img
						src="https://cdn.shopify.com/s/files/1/0607/6570/0305/products/IMG_0165_470x.jpg?v=1635547708"
						alt="Glass Straws"
					/>
					<p>Product 4 Name</p>
					<p>$800</p>
				</div>
				<div className="product">
					<img
						src="https://cdn.shopify.com/s/files/1/0607/6570/0305/products/IMG_0165_470x.jpg?v=1635547708"
						alt="Glass Straws"
					/>
					<p>Product 5 Name</p>
					<p>$900</p>
				</div>
			</div>
		</div>
	);
};
