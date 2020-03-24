import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "../store" 

// REACT-ALERT
import {
	positions, 
	transitions,
	Provider as AlertProvider 
} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Alerts from './Alerts'

// PAGES
import Home from './Home/'
import Article from './Article/'
import Login from './accounts/Login/'
import Register from './accounts/Register/'

// COMPONENTS
import Header from './Header/'

// ALERT OPTIONS
const alertOptions = {
  position: positions.TOP_CENTER,
	timeout: 5000,
	transition: transitions.FADE,
}

class App extends Component {
	 
	render() { 
		return (
			<Provider store={store}> 
				<AlertProvider template={AlertTemplate} {...alertOptions}>
					<Router>
						<>
							<Header />
							<Alerts />
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/article" component={Article} />
								<Route path="/login" component={Login} />
								<Route path="/register" component={Register} />
							</Switch>
						</>
					</Router>
				</AlertProvider> 
			</Provider>
		)
	}
}

export default App

const container = document.getElementById("app")
render(<App />, container)