import React, { useEffect } from "react"

import Navbar from "../Navbar"
import MainFooter from "../Footer/MainFooter"
import TermFooter from "../Footer/TermFooter"

import SellFaqTopBanner from "./SellFaqTopBanner"
import FaqCard from "./FaqCard"
import faqData from "./FaqData"

import "../../styles/Faq.css"

const Faq = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar />
            <div className="main_section">
                <SellFaqTopBanner title="Frequently asked Questions" />

                <div className="faq_section">
                    {faqData.map((eachData, eachDataIndex) => (
                        <FaqCard
                            key={eachDataIndex}
                            question={eachData.qns}
                            answer={eachData.ans}
                        />
                    ))}
                </div>
            </div>
            <MainFooter />
            <TermFooter />
        </div>
    );
};

export default Faq;