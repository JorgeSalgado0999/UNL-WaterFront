import {Link} from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	return (
		<nav>
			<Link to="/">Whisker Chart</Link>
			<Link to="/secondary">Flow Duration Curve</Link>
		</nav>
	);
};
export default NavBar;
