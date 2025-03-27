import { Link } from "react-router-dom";
import { Favorites } from "./Favorites.jsx";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate
						{/* <img src= "https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" /> */}
					</span>
				</Link>
				<div className="ml-auto">
				
						<Favorites />
					
					
				</div>
			</div>
		</nav>
	);
};