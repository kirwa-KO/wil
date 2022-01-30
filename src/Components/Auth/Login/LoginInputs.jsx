import "../AuthInputs.scss";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

function LoginInputs(props) {
	const emailRef = useRef();
	const passwordRef = useRef();

	const [isRemberMeChecked, setIsRemberMeChecked] = useState(false);

	const remberMeChangeHandler = () => {
		setIsRemberMeChecked(prevState => !prevState)
	}

	const onSubmitFormHandler = (event) => {
		event.preventDefault();
		props.onSubmitForm(emailRef.current.value, passwordRef.current.value, isRemberMeChecked);
	};

	return (
		<div className="inputs-container">
			<form
				className="container inputs bg-dark-darkmode"
				onSubmit={onSubmitFormHandler}
			>
				<h4>Login to your account</h4>
				<label htmlFor="email">Email</label>
				<input
					ref={emailRef}
					type="email"
					id="email"
					placeholder="email"
				/>
				<label htmlFor="password">Password</label>
				<input
					ref={passwordRef}
					type="password"
					className="mb-0"
					id="password"
					placeholder="password"
				/>
				<a href="/#">Forget your password?</a>
				<div className="checkbox-container">
						<input type="checkbox" checked={isRemberMeChecked} onChange={remberMeChangeHandler} />
					<span className="main-txt-clr">
						Remeber me
					</span>
				</div>
				<button className="main-btn">Login</button>
				<Link to="/signup">sign up instead ?</Link>
			</form>
		</div>
	);
}

export default LoginInputs;
