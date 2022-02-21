
function CustomStyle(props) {
	return (
		<div className="params">
			<div
				className="light-mode brdr-2-dark"
				onClick={() => props.authCtx.toggleLightMode()}
			>
				<div
					className="spot"
					style={
						props.authCtx.lightMode
							? {
								marginLeft: "auto",
							}
							: {
								marginLeft: "2px",
							}
					}
				></div>
			</div>
			<div
				className="show-particuler brdr-2-dark"
				onClick={() => props.authCtx.toggleShowParticules()}
			>
				<div
					className="spot"
					style={
						props.authCtx.showParticuler
							? {
								marginLeft: "auto",
							}
							: {
								marginLeft: "2px",
							}
					}
				></div>
			</div>
		</div>
	);
}

export default CustomStyle;