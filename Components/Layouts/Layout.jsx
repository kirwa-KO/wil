import AuthContext from "../../store/auth-context";
import { useContext } from "react";
import ParticlesComponent from "../UI/Particles";
import NavBar from "../NavBar/NavBar";

function Layout(props) {
	const authCtx = useContext(AuthContext);
	return (
		<div
			className={`position-relative ${
				authCtx.lightMode ? "dark-mode" : ""
			}`}
			style={
				(authCtx.lightMode && !authCtx.showParticuler)
                ? { backgroundColor: "#1F2128", minHeight: "100vh" }
                : {minHeight: "100vh"}
			}
		>
			<NavBar />
			<ParticlesComponent showParticuler={authCtx.showParticuler} lightMode={authCtx.lightMode} />
			{ props.children }
		</div>
	);
}

export default Layout;