import React, { Dispatch, SetStateAction } from "react";
import "./nav-bar.css";

interface NavBarProps {
	setActiveTab: Dispatch<SetStateAction<string>>;
	numberOfCarItems: number;
}

export const NavBar = ({ setActiveTab, numberOfCarItems }: NavBarProps) => {
	return (
		<nav className="nav-bar">
			<h3 className="nav-menu">Menu</h3>
			<h1
				className="main-logo"
				onClick={() => setActiveTab("Shop Container")}
			>
				LaCava Studios
			</h1>
			<h3 className="nav-cart" onClick={() => setActiveTab("Cart")}>
				Cart {numberOfCarItems}
			</h3>
		</nav>
	);
};
