import "./WiliesCards.scss";
import WilyCard from "./WilyCard";
import { useContext } from "react";
import AuthContext from "../../../store/auth-context";
import SearchFilter from "../../../Components/UI/SearchFilter";
import { useState, useEffect } from "react";
import {
	convertTagsObjectsShapetoArray,
	convertTagsObjectsNameShapetoArrayTags
} from "../../../utils/Heplers";

function WiliesCards(props) {
	const authCtx = useContext(AuthContext);
	const { wilies } = props;
	const [filteredWilies, setFilteredWilies] = useState([]);
	const [sort, setSort] = useState("asc");
	const [searchTags, setSearchTags] = useState(null);

	useEffect(() => {
		setFilteredWilies(wilies);
	}, [wilies]);

	const changeSortHandler = () => {
		setSort((prevSort) => {
			if (prevSort === "asc") {
				setFilteredWilies((prevWilies) => {
					const newWilies = [...prevWilies];
					return newWilies.sort((a, b) => {
						if (a.updatedAt > b.updatedAt) return 1;
						else if (a.updatedAt < b.updatedAt) return -1;
						else return 0;
					});
				});
				return "desc";
			} else prevSort === "desc";
			{
				setFilteredWilies((prevWilies) => {
					const newWilies = [...prevWilies];
					return newWilies.sort((a, b) => {
						if (a.updatedAt > b.updatedAt) return -1;
						else if (a.updatedAt < b.updatedAt) return 1;
						else return 0;
					});
				});
				return "asc";
			}
		});
	};

	const changeFilteredTags = (tags) => {
		var filterTags = convertTagsObjectsShapetoArray(tags);
		if (filterTags.length <= 0) setFilteredWilies(wilies);
		else {
			setFilteredWilies(() => {
				return wilies.filter((wily) => {
					var wilyTagsArray = convertTagsObjectsNameShapetoArrayTags(
						wily.tags
					);
					return filterTags.every((element) => {
						return wilyTagsArray.includes(element);
					});
				});
			});
		}
		setSearchTags(tags);
	};

	return (
		<>
			<SearchFilter
				sort={sort}
				setSort={setSort}
				changeSortHandler={changeSortHandler}
				searchTags={searchTags}
				changeFilteredTags={changeFilteredTags}
				suggestedTags={props.suggestedTags}
			/>
			<div className="wilies-container container">
				{filteredWilies.map(function qstAnswerMapped(wily) {
					return (
						<WilyCard
							key={wily._id}
							wily={wily}
							isLoggedIn={authCtx.isLoggedIn}
							authenticatedUsername={authCtx.username}
							deleteWilyHandler={props.deleteWilyHandler}
						/>
					);
				})}
			</div>
		</>
	);
}

export default WiliesCards;
