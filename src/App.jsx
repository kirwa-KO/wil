import { Route, Switch, Redirect } from "react-router-dom";
import "./styles/DarkMode.scss";
import "./styles/MainCssClasses.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Docs from "./pages/Docs";
import ShowSingleWil from "./pages/ShowSingleWil";
import EditSingleWil from "./pages/EditSingleWil";
import MarkdownPreview from "./pages/MarkdownPreview";

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
				<Route path="/wil/:wilId">
					<ShowSingleWil />
				</Route>
				<Route path="/edit/wil/:wilId">
					<EditSingleWil />
				</Route>
				<Route path="/preview">
					<MarkdownPreview />
				</Route>
				<Route>
					<Redirect to="/" />
				</Route>
			</Switch>
		</>
	);
}

export default App;
