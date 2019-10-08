import React, { Fragment, useState, useEffect } from 'react';
import { TodayTranding } from '../today-trending';
import AllProducts from '../all-products';
import SingleProduct from '../single-product';

const App = () => {

	let [data, setData] = useState([]);
	let [elem, setElem] = useState([]);

	useEffect(() => {
		fetch('http://www.json-generator.com/api/json/get/cfSynsxYfC?indent=2')
			.then(res => res.json())
			.then(data => {
				setData(data)
			});
	}, []);

	function onItemActive (item) {
		setElem(item);
	};

	function resetItem () {
		setElem([]);
	}

	const content = () => {
		if ( elem.length !== 0) {
			return singleProductPage();
		}
		return mainPage();
	}

	const mainPage = () => {
		return (
			<Fragment>
				<TodayTranding props = { data.filter( item => item.isActive) } isActive = {onItemActive} />
				<AllProducts props = {data} isActive = {onItemActive} />
			</Fragment>
		)
	}

	const singleProductPage = () => {
		return (
			<SingleProduct props = {elem} onBack = {resetItem} />
		)
	}

	return (
	  <div className = "App">
	  	{content()}
	  </div>
	);

};

export default App;


