import React from "react"

import Navbar from "../Navbar"
import MainFooter from "../Footer/MainFooter"
import TermFooter from "../Footer/TermFooter"

import TopBanner from "./TopBanner"
import GoalSection from "./GoalSection"
import CertificateSection from "./CertficateSection"
import WorkSection from "./WorkSection"
import Votes from "./Votes"
import JoinTeam from "./JoinTeam"
import TeamMember from "./TeamMember"

const About = () => {
    return (
        <div className="main_section">
            <Navbar />
            <TopBanner />
            <GoalSection />
            <CertificateSection />
            <WorkSection />
            <Votes />
            <JoinTeam />
            <TeamMember />
            <MainFooter />
            <TermFooter />
        </div>
    )
}

export default About
