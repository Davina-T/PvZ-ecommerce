import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'

const ProductList = ({ plants }) => {
	// const products = plants.map((plant) => {
	// 	// prettier-ignore
	// 	return (
	// 		<Product
	// 			key={plantID}
	// 			name={name}
	// 			description={description}
	// 			cost={cost}
	// 		/>
	// 	)
	// })

	return (
		<div className="py-5">
			<div className="container">
				<Title name="Our" title="Products" />
				<div className="row" />
			</div>
			{/* {products} */}
		</div>
		// <Product/>
	)
}

export default ProductList
