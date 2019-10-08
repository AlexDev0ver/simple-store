import React, { Fragment } from 'react';

import { TodayTrandingHeader } from '../today-trending'

import './todayTrending.css';

const TodayTranding = ({ props, isActive }) => {

	return (
			<Fragment>
				<TodayTrandingHeader />

				<div className = "today-tranding">
					{props.map(( item ) => (
						<div className = "tranding-main-container" key = {item._id} onClick = {() => isActive(item)} >
							<div className = "tranding-main-container-picprice">
								<span>${item.price}</span>
								<img
									src='http://placehold.it/100x150'
									alt='I guess it looks better' 
								/>
							</div>

							<div className = 'tranding-main-container-product' >
								<h3>{item.name}</h3>
								<span>{item.company}</span>
								<span style = {{color : "yellow"}}> ★★★★★
									<span style = {{color : "black"}}> (
										{ 
											Math.floor(item.rate.reduce(( a, b ) => (a + b))/item.rate.length)
										}
									)</span>
								</span>
								<button>Add to cart</button>
							</div>
						</div>
					))}
				</div>
			</Fragment>
	)
};

export default TodayTranding;