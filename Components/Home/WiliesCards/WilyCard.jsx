import { useState, useRef } from "react";
import MarkdownPreview from "../../UI/MarkdownPreview";
import Link from 'next/link'
import PlusIcon from "../../../assets/PlusIcon.svg"
import WilyCardHeader from "../../UI/WilyCardHeader";

function WilyCard(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    var { wily } = props;

    const itemsLinkinMobileRef = useRef();

    const deleteWily = wilyId => {
        if (confirm("Are you sure to delete the wily ??"))
            props.deleteWilyHandler(wilyId);
    }

    return (
        <div className="wily wily-container">
			<WilyCardHeader wily={wily} width={24} height={24} />
            <div className="header" onClick={toggleOpen}>
                <div className="qst-container">
                    <MarkdownPreview value={wily.question} id={`wily_${wily._id}`} />
                </div>
                <PlusIcon
                    width={26}
                    height={26}
                    src="/imgs/PlusIcon.svg"
                    alt="plus icon"
                    onClick={toggleOpen}
                    className={`animate ${isOpen ? "rotate-180" : ""}`}
                />
            </div>
            <div
                className="tags-container"
                style={
                    isOpen
                        ? {
                            paddingBottom: "16px",
                        }
                        : {
                            // paddingBottom: "0px",
                        }
                }
            >
                {wily.tags.map((tag, index) => (
                    <Link passHref key={tag._id} href={`/tag/${tag.name}/wilies`}>
                        <span key={tag._id} className="tag">
                            {tag.name}
                        </span>
                    </Link>
                ))}
            </div>
            {isOpen && <hr />}
            <div
                style={
                    isOpen
                        ? {
                            height:
                                itemsLinkinMobileRef.current.scrollHeight +
                                "px",
                        }
                        : {
                            height: "0px",
                        }
                }
                ref={itemsLinkinMobileRef}
                className="answer animate"
            >
                <div className="content">
                    <div className="answer-container">
                        <MarkdownPreview value={wily.answer} id={`wily_${wily._id}`} />
                    </div>
                    <div></div>
                </div>
                <div className="btns-container">
                    <div className="control-btns">
                        <Link passHref href={`/wil/${wily._id}`}>
                            <button className="brdr-2-dark">
                                open as page
                            </button>
                        </Link>
                        {props.isLoggedIn
                            && wily.creator.username === props.authenticatedUsername
                            && <Link passHref href={`/edit/wil/${wily._id}`}>
                                <button className="brdr-2-dark edit-btn">
                                    edit
                                </button>
                            </Link>
                        }
                        {props.isLoggedIn
                            && wily.creator.username === props.authenticatedUsername
                            && <button className="brdr-2-dark delete-btn" onClick={deleteWily.bind(null, wily._id)}>
                            delete
                        </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WilyCard;
