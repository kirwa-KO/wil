import "./MainInputs.scss";
import Autocomplete from "../../UI/AutoComplete";
import { useState, useRef } from "react";

function MainInput() {
	const onSubmitForm = (event) => {
		event.preventDefault();
	};

	const [showAnswerInput, setShowAnswerInput] = useState(false);

	const onChangeQstInput = (event) => {
		setShowAnswerInput(true);
		if (event.target.value == "") setShowAnswerInput(false);
	};

	const itemsLinkinMobileRef = useRef();

	return (
		<form className="main-inputs container" onSubmit={onSubmitForm}>
			<label htmlFor="">Question</label>
			<textarea
				onChange={onChangeQstInput}
				cols="30" rows="5"
				placeholder="Question..."
			/>
			<div
				className="answer"
				style={
					showAnswerInput
						? {
								height:
									itemsLinkinMobileRef.current.scrollHeight +
									"px",
								overflow: "visible",
						  }
						: {
								height: "0px",
								overflow: "hidden",
						  }
				}
				ref={itemsLinkinMobileRef}
			>
				<label htmlFor="">Answer</label>
				<textarea
					cols="30"
					rows="10"
					placeholder="Answer..."
				></textarea>
				<div className="position-relative">
					<Autocomplete suggestions={suggestesTags} />
				</div>
				<button className="main-btn">Add a wily</button>
			</div>
		</form>
	);
}

var suggestesTags = [
	"javascript",
	"reactjs",
	"nodejs",
	"mongodb",
	"expressjs",
	"html",
	"css",
	"sass",
	"bootstrap",
	"webpack",
	"git",
];

export default MainInput;
