import Layout from "../Components/Layouts/Layout";
import ParticlesComponent from "../Components/UI/Particles";
import NavBar from "../Components/NavBar/NavBar";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import PreviewContent from "../Components/MarkdownPreview/PreviewContent";

function MarkdownPreview() {

	const authCtx = useContext(AuthContext);

	return (
		<Layout lightMode={authCtx.lightMode} showParticuler={authCtx.showParticuler}>
			<NavBar />
			<ParticlesComponent showParticuler={authCtx.showParticuler} lightMode={authCtx.lightMode} />
			<PreviewContent />
		</Layout>
	);
}

export default MarkdownPreview;
