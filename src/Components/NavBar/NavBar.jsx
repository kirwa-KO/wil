import "./NavBar.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

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
						<div className="params">
							<div
								className="light-mode brdr-2-dark"
								onClick={() => authCtx.toggleLightMode()}
							>
								<div
									className="spot"
									style={
										authCtx.lightMode
											? {
												marginLeft: "auto",
											}
											: {
												marginLeft: "2px",
											}
									}
								></div>
							</div>
							<div
								className="show-particuler brdr-2-dark"
								onClick={() => authCtx.toggleShowParticules()}
							>
								<div
									className="spot"
									style={
										authCtx.showParticuler
											? {
												marginLeft: "auto",
											}
											: {
												marginLeft: "2px",
											}
									}
								></div>
							</div>
						</div>
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
