import "./NavBar.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

function NavBar(props) {
	const isloggedIn = props.isloggedIn;

	const authCtx = useContext(AuthContext);

	return (
		<div className="navbar-container">
			<nav className="container nav-items">
				<Logo height={34} width={132} />
				{!isloggedIn && (
					<div className="right-items">
						<button className="main-btn-outline">Login</button>
						<button className="main-btn">Sign up</button>
					</div>
				)}
				{isloggedIn && (
					<div className="right-items">
						{/* <Link to="/wilies">My wilies</Link> */}
						<div className="params">
							<div className="light-mode">
								<div className="spot"></div>
							</div>
							<div className="show-particuler"
								onClick={() =>
									authCtx.toggleShowParticules()
								}
							>
								<div
									className="spot"
									style={
										authCtx.showParticuler ? {
											marginLeft: "auto",
										} : {
											marginLeft: "2px",
										}
									}
								></div>
							</div>
						</div>
						<button className="main-btn-outline">Logout</button>
					</div>
				)}
			</nav>
		</div>
	);
}

export default NavBar;
