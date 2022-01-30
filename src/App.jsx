import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./styles/DarkMode.scss";
import "./styles/MainCssClasses.scss";
import LoadingSpinner from "./Components/UI/LoadingSpinner";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Docs = lazy(() => import("./pages/Docs"));
const ShowSingleWil = lazy(() => import("./pages/ShowSingleWil"));
const EditSingleWil = lazy(() => import("./pages/EditSingleWil"));
const MarkdownPreview = lazy(() => import("./pages/MarkdownPreview"));
const OtherUserWilies = lazy(() => import("./pages/OtherUserWilies"));

function App() {
	return (
		<Suspense fallback={<LoadingSpinner />}>
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
				<Route path="/user/:username/wilies">
					<OtherUserWilies />
				</Route>
				<Route>
					<Redirect to="/" />
				</Route>
			</Switch>
		</Suspense>
	);
}

export default App;
