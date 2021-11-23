import React from "react";
import { CartItem } from "../../app";
import "./cart-item.css";

// CartItemDisplay component name needs to be changed
export const CartItemDisplay = ({ description }: CartItem) => (
	<div className="cart-item-container">{description}</div>
);
