import React from "react"

import "../../styles/About_Goal_Section.css"

const GoalSection = () => {
    return (
        <div className="goal_section">
            <div className="goal" id="ourvision">
                <h1>Our Vision</h1>
                <p>
                    Our vision is a world of sustainable consumption and a circular
                    economy. We envision becoming a global one-stop shop for the
                    recycling and upcycling industry.
                </p>
            </div>
            <div className="goal" id="ourmission">
                <p>
                    Our mission is to establish a sustainable recyclable waste
                    management system and a clean and pollution-free country by
                    creating a hyperlocal platform connecting waste producers and
                    waste collectors.
                </p>
                <h1>Our Mission </h1>
            </div>
        </div>
    )
}

export default GoalSection
