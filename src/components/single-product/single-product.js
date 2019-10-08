import React from 'react';

import './single-product.css';

const SingleProduct = ({ props : item, onBack : resetItem }) => {

	const hasData = item.length === 0 ? false : true ;

	if (hasData === false) {
		return null
	};

	let num = 1;

	const Dec = () => {

		if (num === 2) {
			document.querySelector("button.dec").disabled = true;
		}

		if (num !== 1) {
			document.querySelector("span.single-product-span").innerHTML = ` ${--num} `;
		}
	}

	const Ink = () => {
		document.querySelector("button.dec").disabled = false;
		document.querySelector("span.single-product-span").innerHTML = ` ${++num} `;
	}

	return (

		<div className = "single-product">
			<button className = "single-product-buttonBack" onClick = {resetItem} > ← </button>
			<div className = "single-product-container">
				<div className = "single-product-box">
					<p className = "single-product-name">{item.name}</p>
					<p className = "single-product-company">{item.company}</p>
					<p className = "single-product-price">${item.price}</p>
					<p className = "single-product-about">{item.about}</p>
				</div>
				<img src='http://placehold.it/100x150' alt='some pic' />
			</div>
			<p>Raiting <br/>
				<span style = {{color : "yellow"}}> ★★★★★
					<span style = {{color : "black"}}> (
						{ 
							Math.floor(item.rate.reduce(( a, b ) => (a + b))/item.rate.length)
						}
					)</span>
				</span>
			</p>
			<div className = "single-product-sizes">
				<button disabled = {!item.sizes.small} >
					Small <p>10cm x 24cm</p>
				</button>
				<button disabled = {!item.sizes.medium} >
					Medium <p>14cm x 28cm</p>
				</button>
				<button disabled = {!item.sizes.big} >
					Large <p>26cm x 32cm</p>
				</button>
			</div>
			<div className = "single-product-addButtons">
				<div className = "single-product-buttons">
					<button className = "single-product-button dec" onClick = {() => Dec() }> &#60; </button>
					<span className = "single-product-span"> {num} </span>
					<button className = "single-product-button ink" onClick = {() => Ink() }> &#62; </button>
				</div>
				<button className = "single-product-buttonAdd" disabled = {!item.isActive} >Add to cart</button>
			</div>
		</div>
	)
};

export default SingleProduct;
