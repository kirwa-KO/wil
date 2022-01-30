
function ErrorContainer(props) {
	return (
		<div className="wil-content-container">
			<div className="container wil-content wily-container text-center">
				{props.errorMessage}
			</div>
		</div>
	);
}

export default ErrorContainer;