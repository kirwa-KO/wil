import Tags from "../../data/qstsAnswers.json";
import Select from "react-select";
import { useState } from "react";
import "./SearchFilter.scss";

const style = {
	control: (base) => ({
		...base,
		boxShadow: "none",
	}),
	placeholder: (defaultStyles) => {
		return {
			...defaultStyles,
			color: "rgb(158, 167, 184)",
			fontSize: "0.8rem",
		};
	},
};

function SearchFilter() {
	const [selectedOption, setSelectedOption] = useState(null);
	const tags = Tags.tags;
	const [sort, setSort] = useState("");

	const changeSortHandler = () => {
		setSort(prevSort => {
			if (prevSort === "")
				return "asc";
			else if (prevSort === "asc")
				return "desc";
			else
				return "";
		});
	}


	return (
		<div className="search-container container">
			<Select
				defaultValue={selectedOption}
				onChange={setSelectedOption}
				options={tags}
				isMulti
				styles={style}
				className="react-select"
				classNamePrefix="react-select-pre"
				placeholder="Search by tags "
			/>
			<div className="sort-date" onClick={changeSortHandler}>
				{ sort === "" && <span>Sort by date</span> }
				{ sort === "asc" && <span>Ascending</span> }
				{ sort === "desc" && <span>Descending</span> }
			</div>
		</div>
	);
}

export default SearchFilter;
