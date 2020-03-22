import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Home from './Home/'
import Article from './Article/'

import Header from './Header/'

class App extends Component {
	render() {
		return (
			<Router>
				<>
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/article" component={Article} />
					</Switch>
				</>
			</Router> 
		)
	}
}
/*
<BrowserRouter> 
<GlobalStyle />
<Header /> 
<Login />
<Registration />
<Message /> 
<Route exact path="/" component={Home} />
<Route path="/catalog" component={Catalog} />
<Route path="/product/:productID" component={ Product } /> 
<Route path="/checkout" component={Checkout} />
<Route path="/account" component={Account} />
<Footer />
</BrowserRouter>
*/

export default App

const container = document.getElementById("app")
render(<App />, container)