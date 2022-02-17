import { useState, useCallback } from "react";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom";

const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const history = useHistory();

	const authCtx = useContext(AuthContext);

	const sendRequest = useCallback(async (requestConfig, applyData) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(requestConfig.url, {
				method: requestConfig.method ? requestConfig.method : "GET",
				headers: requestConfig.headers ? requestConfig.headers : {},
				body: requestConfig.body
					? JSON.stringify(requestConfig.body)
					: null,
			});

			
			const data = await response.json();

			if (!response.ok) {
				throw data;
			}
			applyData(data);
		} catch (err) {
			if (err.message == "jwt expired") {
				authCtx.logout();
				history.push("/login");
			}
			else {
				setError(err.message || "Something went wrong!");
			}
		}
		setIsLoading(false);
	}, []);

	return {
		isLoading,
		error,
		sendRequest,
	};
};

export default useHttp;
