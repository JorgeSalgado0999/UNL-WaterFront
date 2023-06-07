import {Link} from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	return (
		<nav>
			<Link to="/">Main</Link>
			<Link to="/secondary">Secondary</Link>
		</nav>
	);
};
export default NavBar;
