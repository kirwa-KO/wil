import Layout from "../Components/Layouts/Layout";
import ParticlesComponent from "../Components/UI/Particles";
import NavBar from "../Components/NavBar/NavBar";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import WilContent from "../Components/SingleWil/ShowSingleWil/WilContent";
import { useParams } from "react-router-dom";
import QstsData from "../data/qstsAnswers.json";

function ShowSingleWil() {
	const authCtx = useContext(AuthContext);
	const { wilId } = useParams();

	return (
		<Layout
			lightMode={authCtx.lightMode}
			showParticuler={authCtx.showParticuler}
		>
			<NavBar />
			<ParticlesComponent
				showParticuler={authCtx.showParticuler}
				lightMode={authCtx.lightMode}
			/>
			<WilContent wily={QstsData.data[wilId]} />
		</Layout>
	);
}

export default ShowSingleWil;
