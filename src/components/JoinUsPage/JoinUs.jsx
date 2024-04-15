import React, { useState } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"

import Navbar from '../Navbar'
import MainFooter from "../Footer/MainFooter"
import TermFooter from "../Footer/TermFooter"
import JoinUsComponent from "./JoinUsComponent"

import "@splidejs/splide/dist/css/themes/splide-default.min.css"

import "../../styles/JoinUs.css"

import { JoinUsDetails } from "./JoinUsDetails";

import anju_rathore from "../../assets/Team Members/3_anju_rathore.jpg"
import kumar_vikalp from "../../assets/Team Members/4_kumar_vikalp.png"
import rishita_jain from "../../assets/Team Members/5_rishita_jain.jpg"

const happyTeamMember = [
    {
        dp: anju_rathore,
        name: "Anju Rathore",
        feedback: "I am Anju Rathore Django Developer Intern I started my journey with futuristic startup Kabadi Techno. I got opportunities to work on projects very deeply, understanding each detail. We are enjoying flexible time for work. Working at our own pace along with learning technical skills."
    },
    {
        dp: kumar_vikalp,
        name: "Kumar Vikalp",
        feedback: "Firstly, I joined this internship to gain some experience but later on I realised that I'm not only getting a wonderful experience of the IT world but also honing my skills for the Industry. So I would like to thanks Kuldeep sir for his guidance not only on projects but also on how to deal with life. It was a wonderful experience for me."
    },
    {
        dp: rishita_jain,
        name: "Rishita Jain",
        feedback: "I am glad that I have joined this internship. I am enjoying the learning from day one. I am looking forward to learning a lot under the guidance and support of Kuldeep Sir. I am sure it will be my best internship experience throughout my college that will give me skills for life."
    },
]

const JoinUs = () => {
    const [joinUsDetails, setJoinUsDetails] = useState(JoinUsDetails);

    const openClose = (index) => {
        const newJoinUsDetails = joinUsDetails.map(
            (eachDetail, eachDetailIndex) => {
                if (eachDetailIndex === index) {
                    eachDetail.isOpen = !eachDetail.isOpen;
                } else {
                    eachDetail.isOpen = false;
                }
                return eachDetail;
            }
        );
        setJoinUsDetails(newJoinUsDetails);
    };

    return (
        <div>
            <Navbar />
            <div className="main_section">
                <div className="join_us_top_banner">
                    <h1>JOIN OUR TEAM</h1>
                    <p>
                        "Alone, we can do so little...
                        <br />
                        Together, we can do so much"
                    </p>
                    <span>~ Helen Keller</span>
                </div>

                <div className="join_us_section" id="joinourteam">
                    {joinUsDetails.map((eachDetail, eachDetailIndex) => {
                        return (
                            <JoinUsComponent
                                key={eachDetailIndex}
                                title={eachDetail.title}
                                headline={eachDetail.headline}
                                description={eachDetail.description}
                                disclaimer={eachDetail.disclaimer}
                                component={eachDetail.component}
                                isOpen={eachDetail.isOpen}
                                openClose={openClose.bind(this, eachDetailIndex)}
                            />
                        );
                    })}
                </div>

                <div className="main_section_carousel">
                    <h1>Our Happy Members</h1>
                    {happyTeamMember.length !== 0 ? (
                        <div className="carousel_section">
                            <Splide
                                className="main_carousel"
                                options={{
                                    type: "loop",
                                    gap: "1rem",
                                    autoplay: true,
                                    pauseOnHover: false,
                                    resetProgress: false,
                                    pagination: false,
                                    arrows: false,
                                }}
                            >
                                {happyTeamMember.map((eachDetails, eachDetailsIndex) => {
                                    return (
                                        <SplideSlide key={eachDetailsIndex} className="carousel">
                                            <img src={eachDetails.dp} alt="" />
                                            <div>
                                                <h1>{eachDetails.feedback}</h1>
                                                <p>{eachDetails.name}</p>
                                            </div>
                                        </SplideSlide>
                                    );
                                })}
                            </Splide>
                        </div>
                    ) : null}
                </div>
            </div>
            <MainFooter />
            <TermFooter />
        </div>
    );
};

export default JoinUs;