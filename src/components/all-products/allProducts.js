import React from 'react';

import './allProducts.css';



const AllProducts = ({ props, isActive }) => {

	const datas = props.map(( item ) => (

		<div className = "all-products-single" key = {item._id} onClick = { (e) => isActive(item)} >
			<div className = "all-products-single-picprice">
				<span>${item.price}</span>
				<img
					src = "http://placehold.it/80x120"
					alt = "product-pic"
				/>
			</div>
			<div className = "all-products-single-description">
				<span>{item.name}</span>
				<span style = {{color : "yellow"}}> ★★★★★
					<span style = {{color : "black"}}> (
						{ 
							Math.floor(item.rate.reduce(( a, b ) => (a + b))/item.rate.length)
						}
					)</span>
				</span>
			</div>
		</div>
	))

	return (
		<div className = "all-products">
			<span className = "all-products-header">All Products</span>
			{datas}
		</div>
	)
}

export default AllProducts;