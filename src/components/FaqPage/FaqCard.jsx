import React, { useState } from "react"

import "../../styles/FaqCard.css"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const FaqCard = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq_card">
            <h1
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                {props.question}{" "}
                <span>
                    {isOpen ? (
                        <ExpandLessIcon fontSize="large" />
                    ) : (
                        <ExpandMoreIcon fontSize="large" />
                    )}
                </span>
            </h1>
            {isOpen ? (
                <div>
                    {props.answer.split("\n").map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default FaqCard;
