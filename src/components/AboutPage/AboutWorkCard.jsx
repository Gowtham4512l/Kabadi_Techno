import React from "react"

import "../../styles/About_Work_Card.css"

const AboutWorkCard = (props) => {
    return (
        <div>
            <div className="about_work_card">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default AboutWorkCard
