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
const HireUs = lazy(() => import("./pages/HireUs"));

function App() {
	return (
		<Suspense fallback={<LoadingSpinner />}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="/about" component={About} />
				<Route to="/hire-us" component={HireUs} />
				<Route path="/preview" component={MarkdownPreview} />
				<Route path="/community" component={Community} />
				<Route path="/user/:username/wilies" component={OtherUserWilies} />
				<Route path="/edit/wil/:wilId" component={EditSingleWil} />
				<Route path="/wil/:wilId" component={ShowSingleWil} />
				
				<Route>
					<Redirect to="/" />
				</Route>
			</Switch>
		</Suspense>
	);
}

export default App;
