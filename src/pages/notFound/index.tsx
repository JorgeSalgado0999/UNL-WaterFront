import React from "react";
import "./NotFound.css";
import { useLocation } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="background" id="NotFound">
			<div className="top">
				<h1 className="titleNF">404{useLocation().pathname}</h1>
				<h3 className="subTitleNF">page not found</h3>
			</div>
			<div className="container">
				<div className="ghost-copy">
					<div className="one"></div>
					<div className="two"></div>
					<div className="three"></div>
					<div className="four"></div>
				</div>
				<div className="ghost">
					<div className="face">
						<div className="eye"></div>
						<div className="eye-right"></div>
						<div className="mouth"></div>
					</div>
				</div>
				<div className="shadow"></div>
			</div>
			<div className="bottom">
				<p className="text-center">This page doesn't exist</p>
			</div>

			<footer>
				<p className="textNF">
					made by <a href="https://jorgesalgado.dev"> Jorge Salgado</a>
				</p>
			</footer>
		</div>
	);
};

export default NotFound;
