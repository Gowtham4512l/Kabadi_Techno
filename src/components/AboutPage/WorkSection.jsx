import React from "react"

import AboutWorkCard from "./AboutWorkCard"
import AboutWorkDetails from "./AboutWorkDetails"

import "../../styles/About_Work_Section.css"

const WorkSection = () => {
    return (
        <div className="work_section" id="whatwedo">
            <h1>What We Do?</h1>
            <div className="work">
                {AboutWorkDetails.map((eachDetail, eachDetailIndex) => {
                    return (
                        <AboutWorkCard
                            key={eachDetailIndex}
                            title={eachDetail.title}
                            description={eachDetail.description}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default WorkSection
