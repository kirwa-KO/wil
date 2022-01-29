import Layout from "../Components/Layouts/Layout";
import ParticlesComponent from "../Components/UI/Particles";
import NavBar from "../Components/NavBar/NavBar";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { useParams } from "react-router-dom";
import InputsContent from "../Components/SingleWil/EditSingleWil/InputsContent";
import QstsData from "../data/qstsAnswers.json";

function EditSingleWil() {
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
			<InputsContent wily={QstsData.data[wilId]} />
		</Layout>
	);
}

export default EditSingleWil;
