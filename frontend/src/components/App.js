import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Home from './Home/'
import Article from './Article/'

import Header from './Header/'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				<Route exact path="/" component={Home} />
				<Route path="/article" component={Article} />
			</BrowserRouter> 
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