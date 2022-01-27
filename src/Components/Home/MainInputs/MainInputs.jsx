import "./MainInputs.scss";
import { useState, useRef } from "react";
import CreatableSelect from "react-select/creatable";
import Tags from "../../../data/qstsAnswers.json";

let answerSectionHeight = null;

const maxOptions = Number(import.meta.env.VITE_MAX_TAGS);

const maxQstChars = Number(import.meta.env.VITE_MAX_QST_CHARS);
const maxAnswerChars = Number(import.meta.env.VITE_MAX_ANSWER_CHARS);

const style = {
	control: (base) => ({
		...base,
		boxShadow: base.boxShadow ? "0 0 0 1px #1d1b84" : undefined,
	}),
};

function MainInput() {
	const onSubmitForm = (event) => {
		event.preventDefault();
	};

	const [showAnswerInput, setShowAnswerInput] = useState(false);

	const [selectedOption, setSelectedOption] = useState([]);

	const onChangeQstInput = (event) => {
		setShowAnswerInput(true);
		if (event.target.value == "") setShowAnswerInput(false);
	};

	const itemsLinkinMobileRef = useRef();

	if (
		itemsLinkinMobileRef &&
		itemsLinkinMobileRef.current &&
		answerSectionHeight === null
	) {
		answerSectionHeight = itemsLinkinMobileRef.current.scrollHeight;
	}
	const isValidNewOption = (inputValue, selectValue) =>
		inputValue.length > 0 && selectValue.length < maxOptions;
	return (
		<form className="main-inputs container" onSubmit={onSubmitForm}>
			<label htmlFor="">Question</label>
			<textarea
				onChange={onChangeQstInput}
				cols="30"
				rows="5"
				placeholder="Question..."
				maxLength={maxQstChars}
			/>
			<div
				className="answer"
				style={
					showAnswerInput
						? {
								height: answerSectionHeight + "px",
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
					maxLength={maxAnswerChars}
				></textarea>
				<div className="position-relative">
					<CreatableSelect
						isMulti
						onChange={setSelectedOption}
						options={
							selectedOption.length >= maxOptions
								? selectedOption
								: Tags.tags
						}
						styles={style}
						className="react-select"
						classNamePrefix="react-select-pre"
						placeholder="coding, javascript, react, redux, ..."
						noOptionsMessage={() => {
							return selectedOption.length === maxOptions
								? "You have reached the max tags"
								: "No tags available";
						}}
						isValidNewOption={isValidNewOption}
					/>
				</div>
				<button className="main-btn">Add a wily</button>
			</div>
		</form>
	);
}

export default MainInput;
