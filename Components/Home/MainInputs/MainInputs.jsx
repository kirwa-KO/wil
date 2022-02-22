import React, {
	useState,
	useRef,
	forwardRef,
	useImperativeHandle,
} from "react";
import CreatableSelect from "react-select/creatable";
import InputPreviewMarkdown from "../../UI/InputPreviewMarkdown";
import { convertTagsObjectsShapetoArray } from "../../../utils/Heplers";
import Image from "next/image";

let answerSectionHeight = null;

const maxOptions = Number(process.env.NEXT_MAX_TAGS);

const maxQstChars = Number(process.env.NEXT_MAX_QST_CHARS);
const maxAnswerChars = Number(process.env.NEXT_MAX_ANSWER_CHARS);

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
	const [isPublicWily, setIsPublicWily] = useState(true);
	const [selectedOption, setSelectedOption] = useState([]);
	const [showAnswerInput, setShowAnswerInput] = useState(false);

	const onSubmitForm = (event) => {
		event.preventDefault();
		var tags = convertTagsObjectsShapetoArray(selectedOption);
		props.addWilyHandler(qstInput, answerInput, isPublicWily, tags);
	};

	useImperativeHandle(ref, () => ({
		resetInputs() {
			setQstInput("");
			setAnswerInput("");
			setSelectedOption([]);
			setShowAnswerInput(false);
			setIsPublicWily(true);
		},
	}));

	const onChangeQstInput = (qst) => {
		setShowAnswerInput(true);
		if (qst == "") setShowAnswerInput(false);
		setQstInput(qst);
	};

	// const onChangeAnswerInput = (event) => {
	// 	setAnswerInput(event.target.value);
	// };

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
				placeholder="Question..."
				maxChars={maxQstChars}
				value={qstInput}
				height={278}
				id="qst-input"
			/>
			<div
				className="answer"
				style={
					showAnswerInput
						? {
								minHeight: answerSectionHeight + "px",
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
					onChangeInput={setAnswerInput}
					height={358}
					placeholder="Answer..."
					maxChars={maxAnswerChars}
					value={answerInput}
					className="ml-0"
					id="answer-input"
				/>
				<div className="position-relative">
					<CreatableSelect
						isMulti
						onChange={setSelectedOption}
						options={
							selectedOption.length >= maxOptions
								? selectedOption
								: props.suggestedTags
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
				<div className="row mx-0 mb-3">
					<div
						className={`wil-status col-2 ${
							isPublicWily ? "selected" : ""
						}`}
						onClick={(_) => setIsPublicWily(true)}
					>
						<span>public</span>
						<Image width={16} height={16} src="/imgs/publicIcon.svg" />
					</div>
					<div
						className={`wil-status col-2 ${
							!isPublicWily ? "selected" : ""
						}`}
						onClick={(_) => setIsPublicWily(false)}
					>
						<span>private</span>
                        <Image width={16} height={16} src="/imgs/privateIcon.svg" />
					</div>
					<div className="col-8 d-flex justify-content-end px-0">
						<button className="main-btn">Add a wily</button>
					</div>
				</div>
			</div>
		</form>
	);
});

export default React.memo(MainInput);