import React from 'react'
import styled from 'styled-components'

const Product = ({ plant }) => {
	const { name, description, cost } = plant

	return (
		<ProductWrapper>
			<h2>Name: {name}</h2>
			<p>Description: {description}</p>
			<h3>Cost: {cost}</h3>
		</ProductWrapper>
	)
}

const ProductWrapper = styled.div`
	margin: auto;
	width: 300px;
	height: 500px;
`

export default Product
