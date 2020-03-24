import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/accounts'

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
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink className="nav-link" exact to="/">Home</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/article">Article</NavLink>
							</li>
						</ul> 
						<ul className="navbar-nav ml-auto">
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