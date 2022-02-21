import "./NavBar.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import CustomStyle from "./CustomStyle";

function NavBar() {
	const authCtx = useContext(AuthContext);
	const isloggedIn = authCtx.isLoggedIn;

	return (
		<div className="navbar-container">
			<nav className="container nav-items">
				<Link to="/">
					<Logo height={34} width={132} />
				</Link>
				{!isloggedIn && (
					<div className="right-items">
						<CustomStyle authCtx={authCtx} />
						<Link to="/community">
							<button className="main-btn-outline">Community</button>
						</Link>
						<Link to="/login">
							<button className="main-btn-outline">Login</button>
						</Link>
						<Link to="/signup">
							<button className="main-btn">Sign up</button>
						</Link>
					</div>
				)}
				{isloggedIn && (
					<div className="right-items">
						<CustomStyle authCtx={authCtx} />
						<Link to="/community">
							<button className="main-btn-outline">Community</button>
						</Link>
						<Link to="/about">
							<button className="main-btn-outline">About</button>
						</Link>
						<button
							className="main-btn-outline ml-3"
							onClick={() => authCtx.logout()}
						>
							Logout
						</button>
					</div>
				)}
			</nav>
		</div>
	);
}

export default NavBar;
