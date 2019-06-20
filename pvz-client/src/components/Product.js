import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'

const Product = ({ plant }) => {
	const { name, description, cost, img } = plant

	return (
		<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
			<div className="card">
				<div className="img-container p-5" onClick={() => console.log('you clicked me on the image container')}>
					<Link to="/details">
						<img src={img} alt="product" className="card-img-top" />
					</Link>
				</div>
			</div>

			<h2>{name}</h2>
			<p>{description}</p>
			<h3>Cost: {cost}</h3>
		</ProductWrapper>
	)
}

const ProductWrapper = styled.div`
	margin: auto;

	h2 {
		font-family: 'Cute Font', cursive;
		font-size: 42px;
		color: var(--titleGold);
	}

	p {
		font-size: 20px;
	}
`

export default Product
