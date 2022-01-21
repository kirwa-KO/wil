import { useState } from "react";
import "./AutoComplete.scss";

const Autocomplete = (props) => {
	const [active, setActive] = useState(0);
	const [filtered, setFiltered] = useState([]);
	const [isShow, setIsShow] = useState(false);
	const [input, setInput] = useState("");
	
	const onChange = e => {
	  const { suggestions } = props;
	  const input = e.currentTarget.value;
	  const newFilteredSuggestions = suggestions.filter(
		suggestion =>
		  suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
	  );
	  setActive(0);
	  setFiltered(newFilteredSuggestions);
	  setIsShow(true);
	  setInput(e.currentTarget.value)
	};

  const onClick = e => {
	  setActive(0);
	  setFiltered([]);
	  setIsShow(false);
	  setInput(e.currentTarget.innerText)
	};

  const onKeyDown = e => {
	  if (e.keyCode === 13) { // enter key
		setActive(0);
		setIsShow(false);
		if (filtered[active])
			setInput(filtered[active])
	  }
	  else if (e.keyCode === 38) { // up arrow
		return (active === 0) ? null : setActive(active - 1);
	  }
	  else if (e.keyCode === 40) { // down arrow
		return (active - 1 === filtered.length) ? null : setActive(active + 1);
	  }
	};

  const renderAutocomplete = () => {
	  if (isShow && input) {
		if (filtered.length) {
		  return (
			<ul className="autocomplete">
			  {filtered.map((suggestion, index) => {
				let className;
				if (index === active) {
				  className = "active";
				}
				return (
				  <li className={className} key={suggestion} onClick={onClick}>
					{suggestion}
				  </li>
				);
			  })}
			</ul>
		  );
		} else {
		  return (
			<ul className="autocomplete">
				<li className="active">
				{input} <span className="small-txt">(add new tag)</span>
				</li>
			</ul>
		  );
		}
	  }
	  return <></>;
	}
  return (
	  <div className="autocomplete-container">
		<label htmlFor="">Tag</label>
		<input
		  type="text"
		  onChange={onChange}
		  onKeyDown={onKeyDown}
		  value={input}
		  placeholder="Add a tag..."
		/>
		{renderAutocomplete()}
	  </div>
	);
  }
  export default Autocomplete;