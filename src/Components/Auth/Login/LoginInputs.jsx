import "./LoginInputs.scss";
import { Link } from "react-router-dom";

function LoginInputs() {
	return (
		<div className="inputs-container">
			<form className="container inputs">
				<h4>Login to your account</h4>
				<label htmlFor="email">Email</label>
				<input type="email" id="email" placeholder="email" />
				<label htmlFor="password">Password</label>
				<input type="password" className="mb-0" id="password" placeholder="password" />
				<a href="/#">Forget your password?</a>
				<button className="main-btn">Login</button>
				<Link to="/signup">sign up instead ?</Link>
			</form>
		</div>
	);
}

export default LoginInputs;
