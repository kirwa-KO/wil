// import "./NavBar.scss";
import Link from 'next/link'
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import CustomStyle from "./CustomStyle";
import Image from 'next/image'


function NavBar() {
	const authCtx = useContext(AuthContext);
	const isloggedIn = authCtx.isLoggedIn;

	return (
		<div className="navbar-container">
			<nav className="container nav-items">
				<Link href="/">
					<Image src="/imgs/logo.svg" height={34} width={132} />
				</Link>
				{!isloggedIn && (
					<div className="right-items">
						<CustomStyle authCtx={authCtx} />
						<Link href="/community">
							<button className="main-btn-outline">Community</button>
						</Link>
						<Link href="/login">
							<button className="main-btn-outline">Login</button>
						</Link>
						<Link href="/signup">
							<button className="main-btn">Sign up</button>
						</Link>
					</div>
				)}
				{isloggedIn && (
					<div className="right-items">
						<CustomStyle authCtx={authCtx} />
						<Link href="/community">
							<button className="main-btn-outline">Community</button>
						</Link>
						<Link href="/about">
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
