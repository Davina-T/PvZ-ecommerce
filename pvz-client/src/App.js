import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'

import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			plants: []
		}
	}

	// state = {
	// 	plants: []
	// }

	componentDidMount() {
		this.getPlants()
	}

	getPlants = () => {
		fetch('/products')
			.then((res) => res.json())
			.then((res) => this.setState({ plants: res.data }))
			.catch((err) => console.error(err))
	}

	renderPlant = ({ plantID, name, description, cost }) => (
		<div key={plantID}>
			{name}
			<br />
			{description}
			<br />
			{cost}
		</div>
	)

	render() {
		const { plants } = this.state
		return (
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" render={(props) => <ProductList plants={this.state.plants} />} />
					<Route path="/details" component={Details} />
					<Route path="/cart" component={Cart} />
					<Route component={Default} />
				</Switch>
				{plants.map(this.renderPlant)}
			</div>
		)
	}
}

export default App
