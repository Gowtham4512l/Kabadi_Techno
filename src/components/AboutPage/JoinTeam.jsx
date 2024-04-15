import React from "react"
import { NavLink } from "react-router-dom"

import "../../styles/About_Join_Team.css"

const JoinTeam = () => {
    return (
        <div className="join_team_section">
            <div className="left_side">
                <h1>Join Our Team</h1>
            </div>
            <div className="right_side">
                <h1>
                    Join us on our mission to revolutionise the waste management
                    industry
                </h1>
                <NavLink to="/joinus" className="join_team_button">
                    More Info
                </NavLink>
            </div>
        </div>
    )
}

export default JoinTeam
