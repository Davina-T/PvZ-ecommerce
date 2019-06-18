import React, { useContext } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer, ProductContext } from '../context'

const ProductList = () => {
	const plants = useContext(ProductContext)
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
					<div>{plants}</div>
					{/* <ProductConsumer>
						{(plants) => {
							return <div>{plants}</div>
						}}
					</ProductConsumer> */}
				</div>
			</div>
		</div>
		// <Product/>
	)
}

export default ProductList
