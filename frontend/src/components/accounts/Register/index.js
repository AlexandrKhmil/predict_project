import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../../../actions/accounts'

class Register extends Component {
	state = {
		username: '',
		email: '',
		password: '',
		password2: '',
	}

	onChange = e => this.setState({ [e.target.name]: e.target.value })

	onSubmit = e => {
		e.preventDefault()
		const { register } = this.props
		const { 
			username, 
			email, 
			password, 
			password2 
		} = this.state
		
		if (password === password2) {
			const newUser = {
				username, 
				password,
				email,
			} 
			register(newUser)
		} else {
			console.log('password error')
		}
	}

	render() {
		const {
			username,
			email,
			password,
			password2
		} = this.state

		return (
			<div className="col-md-6 m-auto">
				<div className="card card-body mt-5">
					<h2 className="text-center">Register</h2>
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
							<label htmlFor="email">Email</label>
							<input 
								type="email"
								className="form-control"
								name="email"
								onChange={this.onChange}
								value={email}
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
							<label htmlFor="password2">Confirm password</label>
							<input 
								type="password"
								className="form-control"
								name="password2"
								onChange={this.onChange}
								value={password2}
							/>
						</div> 
						<div className="form-group">
							<button 
								type="submit"
								className="btn btn-primary"
							>
								Register
							</button>
						</div> 
						<p>
							Do you already have an account? <NavLink to="/login">Login</NavLink>
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
	{ register }
)(Register)