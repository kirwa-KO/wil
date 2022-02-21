import Layout from "../Components/Layouts/Layout";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import PreviewContent from "../Components/MarkdownPreview/PreviewContent";

function MarkdownPreview() {

	const authCtx = useContext(AuthContext);

	return (
		<Layout>
			<PreviewContent />
		</Layout>
	);
}

export default MarkdownPreview;
