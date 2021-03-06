import CreatableSelect from "react-select/creatable";
import { useState } from "react";
import { convertTagsAraayObjsShapetoObjects } from "../../../utils/Heplers";
import InputPreviewMarkdown from "../../UI/InputPreviewMarkdown";
import { convertTagsObjectsShapetoArray } from "../../../utils/Heplers";
import PrivateIcon from "../../../assets/privateIcon.svg";
import PublicIcon from "../../../assets/publicIcon.svg";
import WilyCardHeader from "../../UI/WilyCardHeader";

const maxOptions = Number(process.env.NEXT_PUBLIC_MAX_TAGS);
const maxQstChars = Number(process.env.NEXT_PUBLIC_MAX_QST_CHARS);
const maxAnswerChars = Number(process.env.NEXT_PUBLIC_MAX_ANSWER_CHARS);

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
	var tagsArrays = wily.tags
		? convertTagsAraayObjsShapetoObjects(wily.tags)
		: null;

	const [qstInput, setQstInput] = useState(wily.question);
	const [answerInput, setAnswerInput] = useState(wily.answer);
	const [selectedOption, setSelectedOption] = useState(tagsArrays);
	const [isPublicWily, setIsPublicWily] = useState(wily.isPublic);

	const onChangeQstInput = (value) => {
		setQstInput(value);
	};

	const onChangeAnswerInput = (value) => {
		setAnswerInput(value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		var tags = convertTagsObjectsShapetoArray(selectedOption);
		props.onEditWily(qstInput, answerInput, isPublicWily, tags);
	};

	return (
		<div className="edit-container">
			<div className="container">
				<form
					className="main-inputs bg-dark-darkmode mb-4"
					onSubmit={onSubmitHandler}
				>
					<WilyCardHeader wily={wily} width={24} height={24} />
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
								selectedOption &&
								selectedOption.length >= maxOptions
									? selectedOption
									: props.tags
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
						<div className="row mx-0 mb-3">
							<div
								className={`wil-status col-2 ${
									isPublicWily ? "selected" : ""
								}`}
								onClick={(_) => setIsPublicWily(true)}
							>
								<span>public</span>
								<PublicIcon />
							</div>
							<div
								className={`wil-status col-2 ${
									!isPublicWily ? "selected" : ""
								}`}
								onClick={(_) => setIsPublicWily(false)}
							>
								<span>private</span>
								<PrivateIcon />
							</div>
							<div className="col-8 d-flex justify-content-end px-0">
								<button className="main-btn">Edit wily</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default InputsContent;
