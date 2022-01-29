import "./SignupInputs.scss";
import { Link } from "react-router-dom";

function SignupInputs() {
	return (
		<div className="inputs-container">
			<form className="container inputs bg-dark-darkmode">
				<h4>Create your account</h4>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" placeholder="username" />
				<label htmlFor="email">Email</label>
				<input type="email" id="email" placeholder="email" />
				<label htmlFor="password">Password</label>
				<input type="password" id="password" placeholder="password" />
				<button className="main-btn">Sign up</button>
				<Link to="/login">login instead ?</Link>
			</form>
		</div>
	);
}

export default SignupInputs;
