import React, { Component } from 'react'

const ProductContext = React.createContext()
// Provider
// Consumer

class ProductProvider extends Component {
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
		// prettier-ignore
		return <ProductContext.Provider value={plants.map(this.renderPlant)}>
                    {this.props.children}
                </ProductContext.Provider>
	}
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer, ProductContext }
