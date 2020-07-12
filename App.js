import React from "react";
import ReactDOM from "react-dom";

function Card(props){
	console.log(props);
	return(
		<>
		<div className = "div1">
			
			<h3>{props.title}</h3><hr/>
			<img src = {props.imgsrc} alt="pic not loaded" />
			<div>{props.sname}</div>
			<a className="btn" href={props.link}> <button align="center">Watch Now</button></a>
		</div>
		</>
	);
}

export default Card;