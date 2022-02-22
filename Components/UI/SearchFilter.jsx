import Select from "react-select";
import React from "react";

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

function SearchFilter(props) {
	return (
		<div className="search-container container">
			<Select
				defaultValue={props.searchTags}
				onChange={props.changeFilteredTags}
				options={props.suggestedTags}
				isMulti
				styles={style}
				className="react-select"
				classNamePrefix="react-select-pre"
				placeholder="Search by tags "
			/>
			<div
				className="sort-date bg-dark-darkmode"
				onClick={props.changeSortHandler}
			>
				{props.sort === "asc" && <span>Ascending</span>}
				{props.sort === "desc" && <span>Descending</span>}
			</div>
		</div>
	);
}

export default React.memo(SearchFilter);
