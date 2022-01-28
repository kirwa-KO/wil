import Layout from "../Components/Layouts/Layout";
import ParticlesComponent from "../Components/UI/Particles";
import NavBar from "../Components/NavBar/NavBar";
import MainInputs from "../Components/Home/MainInputs/MainInputs";
import WiliesCards from "../Components/Home/WiliesCards/WiliesCards";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import SearchFilter from "../Components/UI/SearchFilter";

function Home() {
	var wilies = [
		{
			question: "What is Wil?",
			answer: "Wil is an open-source, Node.js based, Headless CMS that saves developers a lot of development time while giving them the freedom to use their favorite tools and frameworks.",
		},
		{
			question: "What is an API?",
			answer: "A headless CMS is a back-end only content management system (CMS) built from the ground up as a content repository that makes content accessible via an ",
		},
	];

	const authCtx = useContext(AuthContext);

	return (
		<Layout lightMode={authCtx.lightMode} showParticuler={authCtx.showParticuler}>
			<NavBar />
			<ParticlesComponent showParticuler={authCtx.showParticuler} lightMode={authCtx.lightMode} />
			<MainInputs />
			<SearchFilter />
			<WiliesCards wilies={wilies} />
		</Layout>
	);
}

export default Home;
