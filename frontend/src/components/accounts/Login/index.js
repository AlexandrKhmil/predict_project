import React, { Component } from 'react'
import { Redirect, NavLink } from 'react-router-dom'
import { connect } from 'react-redux' 

import { login } from '../../../actions/accounts'

class Login extends Component {
	state = {
		username: '',
		password: '',
	}

	onChange = e => this.setState({ [e.target.name]: e.target.value })

	onSubmit = e => {
		e.preventDefault()
		const { login } = this.props
		const { username, password } = this.state
		login(username, password)
	}

	render() {
		const { isAuthenticated } = this.props
		const { username, password } = this.state

		if (isAuthenticated) {
			return <Redirect to="/" />
		}

		return (
			<div className="col-md-6 m-auto">
				<div className="card card-body mt-5">
					<h2 className="text-center">Login</h2>
					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<label htmlFor="username">Username</label>
							<input 
								type="text"
								className="form-control"
								name="username"
								onChange={this.onChange}
								value={username}
							/>
						</div> 
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input 
								type="password"
								className="form-control"
								name="password"
								onChange={this.onChange}
								value={password}
							/>
						</div>
						<div className="form-group">
							<button
								type="submit"
								className="btn btn-primary"
							>
								Login
							</button>
						</div>
						<p>
							Don't have an account? <NavLink to="/register">Register</NavLink>
						</p>
					</form>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.accounts.isAuthenticated
})

export default connect(
	mapStateToProps,
	{ login }
)(Login)