import React, { Component } from 'react'
import './App.css'

class App extends Component {
	state = {
		plants: []
	}

	componentDidMount() {
		this.getPlants()
	}

	getPlants = () => {
		fetch('/products')
			.then((res) => res.json())
			.then((res) => this.setState({ plants: res.data }))
			.catch((err) => console.error(err))
	}

	renderPlant = ({ plantID, name }) => <div key={plantID}>{name}</div>

	render() {
		const { plants } = this.state
		return (
			<div className="App">
				<header className="App-header">
					<h1>Plants vs Zombies Shop</h1>
				</header>

				{plants.map(this.renderPlant)}
			</div>
		)
	}
}

export default App
