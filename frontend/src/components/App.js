import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import { bindActionCreators } from 'redux'
import { Provider } from 'react-redux'

import store from "../store"

import Home from './Home/'
import Article from './Article/'
import Login from './accounts/Login/'
import Register from './accounts/Register/'

import Header from './Header/'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<>
						<Header />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/article" component={Article} />
							<Route path="/article2" component={Article} />
							<Route path="/login" component={Login} />
							<Route path="/register" component={Register} />
						</Switch>
					</>
				</Router> 
			</Provider>
		)
	}
}

export default App

const container = document.getElementById("app")
render(<App />, container)