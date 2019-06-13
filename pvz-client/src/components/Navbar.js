import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';

import './styles/navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
			<Link to="/">
				<img src={logo} alt="store" className="navbar-brand" />
			</Link>
			<ul className="navbar-nav align-items-center">
				<li className="nav-item ml-5">
					<Link to="/" className="nav-link">
						Products
					</Link>
				</li>
			</ul>
			<Link to="/cart" className="ml-auto">
				<ButtonContainer>
					<span className="mr-2">
						<i className="fas fa-cart-plus" />
					</span>
					My Cart
				</ButtonContainer>
			</Link>
		</nav>
	);
};

const ButtonContainer = styled.button`
	font-size: 1.4rem;
	background: transparent;
	border: 0.05rem solid var(--mediumBrown);
	color: var(--mediumBrown);
	border-raiuds: 0.5rem;
	padding: 0.2rem 0.5rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.2rem 0;
	transition: all 0.3s ease-in-out;

	&:hover {
		background: var(--mediumBrown);
		color: var(--lightBrown);
	}

	&:focus {
		outline: none;
	}
`;
// https://youtu.be/-edmQKcOW8s?list=PLtLaFrK9hJaAG7rVtcNRCBAQbO5nPc8AZ&t=4217

export default Navbar;
