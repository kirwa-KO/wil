import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./styles/DarkMode.scss";
import "./styles/MainCssClasses.scss";
import LoadingSpinner from "./Components/UI/LoadingSpinner";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const About = lazy(() => import("./pages/About"));
const ShowSingleWil = lazy(() => import("./pages/ShowSingleWil"));
const EditSingleWil = lazy(() => import("./pages/EditSingleWil"));
const MarkdownPreview = lazy(() => import("./pages/MarkdownPreview"));
const OtherUserWilies = lazy(() => import("./pages/OtherUserWilies"));
const Community = lazy(() => import("./pages/Community"));

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
				<Route path="/about">
					<About />
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
				<Route path="/community">
					<Community />
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
