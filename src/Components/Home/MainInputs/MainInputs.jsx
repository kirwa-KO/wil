import "./MainInputs.scss";
import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import CreatableSelect from "react-select/creatable";
import Tags from "../../../data/qstsAnswers.json";
import InputPreviewMarkdown from "../../UI/InputPreviewMarkdown";
import { convertTagsObjectsShapetoArray } from "../../../utils/Heplers";

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

const isValidNewOption = (inputValue, selectValue) =>
	inputValue.length > 0 && selectValue.length < maxOptions;

const MainInput = forwardRef((props, ref) => {
	const [qstInput, setQstInput] = useState();
	const [answerInput, setAnswerInput] = useState();
	const [selectedOption, setSelectedOption] = useState([]);
	const [showAnswerInput, setShowAnswerInput] = useState(false);

	console.log("main Inputs")

	const onSubmitForm = (event) => {
		event.preventDefault();
		var tags = convertTagsObjectsShapetoArray(selectedOption);
		props.addWilyHandler(qstInput, answerInput, true, tags);
	};

	useImperativeHandle(ref, () => ({
		resetInputs() {
			setQstInput("");
			setAnswerInput("");
			setSelectedOption([]);
			setShowAnswerInput(false);
		},
	}));

	const onChangeQstInput = (event) => {
		setShowAnswerInput(true);
		if (event.target.value == "") setShowAnswerInput(false);
		setQstInput(event.target.value);
	};

	const onChangeAnswerInput = (event) => {
		setAnswerInput(event.target.value);
	};

	const itemsLinkinMobileRef = useRef();

	if (
		itemsLinkinMobileRef &&
		itemsLinkinMobileRef.current &&
		answerSectionHeight === null
	) {
		answerSectionHeight = itemsLinkinMobileRef.current.scrollHeight;
	}

	return (
		<form
			className="main-inputs container bg-dark-darkmode"
			onSubmit={onSubmitForm}
		>
			<label htmlFor="">Question</label>
			<InputPreviewMarkdown
				onChangeInput={onChangeQstInput}
				rows="5"
				placeholder="Question..."
				maxChars={maxQstChars}
				value={qstInput}
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
				<InputPreviewMarkdown
					onChangeInput={onChangeAnswerInput}
					rows="10"
					placeholder="Answer..."
					maxChars={maxAnswerChars}
					value={answerInput}
					className="ml-0"
				/>
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
});

export default React.memo(MainInput);
