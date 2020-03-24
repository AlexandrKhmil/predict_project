import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { logout } from "../../actions/accounts";

class Header extends Component {
	render() {
		const { isAuthenticated, user } = this.props.accounts
		const { logout } = this.props

		const userLinks = (
			<>
				<span className="navbar-text mr-3">
					<strong>{user ? `Welcome ${user.username}` : ""}</strong>
				</span> 
				<li className="nav-item">
					<button
						className="nav-link btn btn-info btn-sm text-light" 
						onClick={logout}
					>
						Logout
					</button>
				</li>
			</>
		)
		const guestLinks = (
			<>
				<li className="nav-item">
					<NavLink className="nav-link" to="/login">Login</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/register">Register</NavLink>
				</li>
			</>
		)

		return (
			<header>
				<nav className="navbar navbar-expand navbar-dark bg-primary">
					<div className="collapse navbar-collapse container">
						<ul className="navbar-nav mr-right">
							<li className="nav-item">
								<NavLink className="nav-link" to="/">Home</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/article">Article</NavLink>
							</li>
						</ul> 
						<ul className="navbar-nav mr-left">
							{isAuthenticated ? userLinks : guestLinks}
						</ul>
					</div>
				</nav>
			</header> 
		)
	}
}

const mapStateToProps = state => ({
	accounts: state.accounts
})

export default connect(
	mapStateToProps,
	{ logout }
)(Header)

/*
export class Header extends Component {
//   static propTypes = {
//     auth: PropTypes.object.isRequired,
//     logout: PropTypes.func.isRequired
//   };

	render() {
		const { isAuthenticated, user } = this.props.auth;

		const authLinks = (
			<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
				<span className="navbar-text mr-3">
					<strong>{user ? `Welcome ${user.username}` : ""}</strong>
				</span>
				<li className="nav-item">
					<button
						onClick={this.props.logout}
						className="nav-link btn btn-info btn-sm text-light"
					>
						Logout
					</button>
				</li>
			</ul>
		);

		const guestLinks = (
			<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
				<li className="nav-item">
					<Link to="/register" className="nav-link">
						Register
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/login" className="nav-link">
						Login
					</Link>
				</li>
			</ul>
		);

		return (
			<nav className="navbar navbar-expand-sm navbar-light bg-light">
				<div className="container">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarTogglerDemo01"
						aria-controls="navbarTogglerDemo01"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						<a className="navbar-brand" href="#">
							Lead Manager
						</a>
					</div>
					{isAuthenticated ? authLinks : guestLinks}
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ logout }
)(Header);
*/

/*import React, { Component } from 'react'
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
*/