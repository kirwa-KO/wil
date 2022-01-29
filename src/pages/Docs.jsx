import Layout from "../Components/Layouts/Layout";
import ParticlesComponent from "../Components/UI/Particles";
import NavBar from "../Components/NavBar/NavBar";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import DocsContent from "../Components/Docs/DocsContent";

function Docs() {
	const authCtx = useContext(AuthContext);

	return (
		<Layout lightMode={authCtx.lightMode} showParticuler={authCtx.showParticuler}>
			<NavBar />
			<ParticlesComponent showParticuler={authCtx.showParticuler} lightMode={authCtx.lightMode} />
			<DocsContent />
		</Layout>
	);
}

export default Docs;
