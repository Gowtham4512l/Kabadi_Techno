import React from "react";
import "../../styles/JoinUsComponent.css";

const JoinUsComponent = (props) => {
    return (
        <div className="join_us_component">
            <div className="top_section">
                <div className="left_side">
                    <h1>{props.title}</h1>
                </div>
                <div className="right_side">
                    <p>{props.headline}</p>
                    <button onClick={props.openClose}>
                        {props.isOpen ? "Less Info" : "More Info"}
                    </button>
                </div>
            </div>

            {props.isOpen ? (
                <div className="bottom_section">
                    <p>{props.description}</p>
                    <span>{props.disclaimer}</span>
                    <props.component />
                </div>
            ) : null}
        </div>
    );
};

export default JoinUsComponent;
