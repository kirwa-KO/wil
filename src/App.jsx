import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Docs from "./pages/Docs";
import "./styles/DarkMode.scss";

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route>
				<Route path="/docs">
					<Docs />
				</Route>
				<Route>
					<Redirect to="/" />
				</Route>
			</Switch>
		</>
	);
}

export default App;
