import Layout from "../../../Components/Layouts/Layout";
import { useContext, useRef, useState } from "react";
import AuthContext from "../../../store/auth-context";
import useHttp from "../../../hooks/useHttp";
import LoadingSpinner from "../../../Components/UI/LoadingSpinner";
import { useAlert } from "react-alert";
import { useRouter } from 'next/router';
import Image from "next/image";

let isAlertExistBefore = false;

function EditUser() {
	const authCtx = useContext(AuthContext);
	const { isLoading, error, sendRequest: sendSignupRequest } = useHttp();
	
	const alert = useAlert();
	const router = useRouter();
    const [avatar, setAvatar] = useState("");
	const usernameRef = useRef();
    const emailRef = useRef();

	
	const EditUserSuccess = (userData) => {
		if (isAlertExistBefore) alert.removeAll();
            alert.show(userData.message, { type: "sucess", timeout: 3000 });
		router.push("/");
	};

	const submitLoginFormHandler = (event) => {
        event.preventDefault();
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
		sendSignupRequest(
			{
				url: `${process.env.NEXT_PUBLIC_API_LINK}/feed/user/${authCtx.userId}`,
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
                    Authorization: `Bearer ${authCtx.token}`
				},
				body: { email, username, avatar },
			},
			EditUserSuccess
		);
	};

	if (error) {
		if (isAlertExistBefore) alert.removeAll();
		alert.show(error, { type: "error" });
		isAlertExistBefore = true;
	}

    const onChangeAvatar = (e) => {
        console.log(e.target.value)
        setAvatar(e.target.value);
    };

	return (
		<Layout>
			{isLoading && <LoadingSpinner />}
			<div className="inputs-container">
			<form
				className="container inputs bg-dark-darkmode"
				onSubmit={submitLoginFormHandler}
                style={{
                    paddingBottom: "36px",
                }}
			>
				<h4>Edit your account</h4>
                <Image width={128} height={128} alt="avatar img" src={`https://avatars.dicebear.com/api/adventurer/${avatar}.svg`} />
                <label htmlFor="avatar">Your avatar</label>
				<input
					type="text"
					id="avatar"
					placeholder="avatar"
                    value={avatar}
                    defaultValue={authCtx.avatar ? authCtx.avatar : authCtx.username}
                    onChange={onChangeAvatar}
				/>
                <label htmlFor="username" className="mt-2">Your username</label>
				<input
					type="text"
					id="username"
					placeholder="username"
                    defaultValue={authCtx.username}
                    ref={usernameRef}
				/>
				<label htmlFor="email" className="mt-2">Your email</label>
				<input
					type="email"
					id="email"
					placeholder="email"
                    ref={emailRef}
				/>
				<button className="main-btn mt-4">Change Profile</button>
			</form>
		</div>
		</Layout>
	);
}

export default EditUser;
