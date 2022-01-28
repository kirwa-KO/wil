
function Layout(props) {
	return (
		<div
			className={`position-relative ${
				props.lightMode ? "dark-mode" : ""
			}`}
			style={
				(props.lightMode && !props.showParticuler) ? {
					backgroundColor: "#1F2128",
					minHeight: "100vh"
				} : {minHeight: "100vh"}
			}
		>
			{ props.children }
		</div>
	);
}

export default Layout;