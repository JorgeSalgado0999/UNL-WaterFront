import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "../navbar";
import "./MainTemplate.css";

const MainTemplate = () => {
	return (
		<div>
			<NavBar />
			<div className="pages-content">
				<Outlet />
			</div>
		</div>
	);
};

export default MainTemplate;
