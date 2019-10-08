import React from 'react';

const TodayTrandingHeader = () => {
	const date = 
		new Date(),
		months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		curMonth = months[date.getMonth()],
		domEnder = function() { let a = date; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th" }(),
		dayOfMonth =  ( date.getDate() < 10) ? '0' + date.getDate() + domEnder : date.getDate() + domEnder;

	const thisDate = dayOfMonth + ' ' + curMonth;

	return (
		<div className = "tranding-header">
			<h2>Todays Trending</h2>
			<span>{thisDate}</span>
		</div>
	)
}

export default TodayTrandingHeader;
