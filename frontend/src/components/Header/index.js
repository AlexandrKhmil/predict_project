import React, { Component } from 'react'
import { NavLink } from 'react-router-dom' 

const Header = props => (
	<header>
		<nav className="navbar navbar-expand navbar-dark bg-primary">
			<div className="collapse navbar-collapse container">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink className="nav-link" to="/">Home</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/article">Article</NavLink>
					</li>
				</ul> 
			</div>
		</nav>
	</header> 
)

export default Header