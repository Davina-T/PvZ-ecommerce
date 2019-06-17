import React from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer } from '../context'

const ProductList = () => {
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
				<div className="row">
					<ProductConsumer>
						{(plants) => {
							return <div>{plants}</div>
						}}
					</ProductConsumer>
				</div>
			</div>
		</div>
		// <Product/>
	)
}

export default ProductList
