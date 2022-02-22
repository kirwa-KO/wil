import Link from 'next/link'
import { useRef } from "react";

function SignupInputs(props) {

	const usernameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();

	const onSubmitFormHandler = event => {
		event.preventDefault();
		props.onSubmitForm(
			usernameRef.current.value,
			emailRef.current.value,
			passwordRef.current.value
		);
	}
	return (
		<div className="inputs-container">
			<form className="container inputs bg-dark-darkmode" onSubmit={onSubmitFormHandler}>
				<h4>Create your account</h4>
				<label htmlFor="username">Username</label>
				<input ref={usernameRef} type="text" id="username" placeholder="username" />
				<label htmlFor="email">Email</label>
				<input ref={emailRef} type="email" id="email" placeholder="email" />
				<label htmlFor="password">Password</label>
				<input ref={passwordRef} type="password" id="password" placeholder="password" />
				<button className="main-btn">Sign up</button>
				<Link href="/login">login instead ?</Link>
			</form>
		</div>
	);
}

export default SignupInputs;
