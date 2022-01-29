import Layout from "../Components/Layouts/Layout";
import ParticlesComponent from "../Components/UI/Particles";
import NavBar from "../Components/NavBar/NavBar";
import MainInputs from "../Components/Home/MainInputs/MainInputs";
import WiliesCards from "../Components/Home/WiliesCards/WiliesCards";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import SearchFilter from "../Components/UI/SearchFilter";
import QstsData from "../data/qstsAnswers.json";

function Home() {

	const authCtx = useContext(AuthContext);

	return (
		<Layout lightMode={authCtx.lightMode} showParticuler={authCtx.showParticuler}>
			<NavBar />
			<ParticlesComponent showParticuler={authCtx.showParticuler} lightMode={authCtx.lightMode} />
			<MainInputs />
			<SearchFilter />
			<WiliesCards wilies={QstsData.data} />
		</Layout>
	);
}

export default Home;
