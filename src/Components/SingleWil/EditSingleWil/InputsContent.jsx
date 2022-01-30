import "./InputsContent.scss";
import getFormatedDate from "../../../utils/FormatDate";
import CreatableSelect from "react-select/creatable";
import Tags from "../../../data/qstsAnswers.json";
import { useState } from "react";
import { convertTagsArrayShapetoObjects } from "../../../utils/Heplers";
import Markdown from "../../UI/Markdown";
import InputPreviewMarkdown from "../../UI/InputPreviewMarkdown";

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

function InputsContent(props) {
	var { wily } = props;
	var tagsArrays = convertTagsArrayShapetoObjects(wily.tags);

	const [qstInput, setQstInput] = useState(wily.qst);
	const [answerInput, setAnswerInput] = useState(wily.answer);
	const [selectedOption, setSelectedOption] = useState(tagsArrays);

	const onChangeQstInput = (event) => {
		setQstInput(event.target.value);
	};

	const onChangeAnswerInput = (event) => {
		setAnswerInput(event.target.value);
	};

	return (
		<div className="edit-container">
			<div className="container">
				<form className="main-inputs bg-dark-darkmode">
					<div className="date-label">
						twelve • {getFormatedDate(wily.date)}
					</div>
					<label htmlFor="">Question</label>
					<InputPreviewMarkdown
						onChangeInput={onChangeQstInput}
						rows="8"
						placeholder="Question..."
						maxChars={maxQstChars}
						value={qstInput}
					/>
					<label htmlFor="">Answer</label>
					<InputPreviewMarkdown
						onChangeInput={onChangeAnswerInput}
						rows="10"
						placeholder="Answer..."
						maxChars={maxAnswerChars}
						value={answerInput}
					/>
					<div className="position-relative w-100">
						<CreatableSelect
							isMulti
							onChange={setSelectedOption}
							value={selectedOption}
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
					<button className="main-btn mr-auto">Edit wily</button>
				</form>
			</div>
		</div>
	);
}

export default InputsContent;
