import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route>
					<Redirect to="/" />
				</Route>
			</Switch>
		</>
	);
}

export default App;
