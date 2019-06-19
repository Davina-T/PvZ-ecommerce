import React, { Component, useContext } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer, ProductContext } from '../context'

const ProductList = () => {
	// const plants = useContext(ProductContext)
	// console.log(plants)

	return (
		<div className="py-5">
			<div className="container">
				<Title name="Our" title="Products" />
				<div className="row">
					{/* <div>{plants}</div> */}
					<ProductConsumer>
						{(plants) => {
							return plants.map((plant) => {
								return <Product key={plant.plantID} plant={plant} />
							})
						}}
					</ProductConsumer>
				</div>
			</div>
		</div>
		// <Product/>
	)
}

export default ProductList
