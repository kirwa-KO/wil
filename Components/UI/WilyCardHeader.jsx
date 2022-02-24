import Image from "next/image";
import getFormatedDate from "../../utils/FormatDate";
import CopyLink from "../../assets/icons/CopyLink.svg";
import { useState, useEffect } from "react";

const DefaultCopyText = "copy wily link";

function WilyCardHeader(props) {

    const [copyText, setCopyText] = useState(DefaultCopyText);

    let onClickCopyClipboard;

    if (typeof window !== "undefined") {
        onClickCopyClipboard = () => {
            setCopyText("wily link copied");
            navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/wil/${props.wily._id}`);
        }
    }
    useEffect(() => {
        const hoverTimeout = setTimeout(_ => setCopyText(DefaultCopyText), 1000)
		return (() => clearTimeout(hoverTimeout));
    }, [copyText])

    return (
        <span className="date-label d-flex">
            <div className="d-flex">
                {props.wily.creator && <Image width={props.width} height={props.height} className="mr-1" src={`https://avatars.dicebear.com/api/adventurer/${props.wily.creator.avatar ? props.wily.creator.avatar : props.wily.creator.username}.svg`} alt="avatar image" />}
                {props.wily.creator && props.wily.creator.username} •{" "}
                {props.wily.creator && getFormatedDate(props.wily.updatedAt)}
            </div>
            <div className="">
                <span className="mr-2">{copyText}</span>
                <CopyLink onClick={onClickCopyClipboard} />
            </div>
        </span>
    );
};

export default WilyCardHeader;