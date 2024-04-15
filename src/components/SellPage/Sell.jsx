// Sell.jsx
import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// component
import Navbar from "../Navbar";
import SellFaqTopBanner from "../FaqPage/SellFaqTopBanner";
import ChangePincode from "./ChangePincode";
import SellCard from "./SellCard";
import MainFooter from "../../components/Footer/MainFooter";
import TermFooter from "../../components/Footer/TermFooter";

// css
import "../../styles/Sell.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import customer1 from "../../assets/Customers/customer1.jpg"
import customer2 from "../../assets/Customers/customer2.jpg"

import e_waste from "../../assets/Scrap/e-waste.jpg"
import glass from "../../assets/Scrap/glass.jpg"
import metals from "../../assets/Scrap/metals.jpg"
import others from "../../assets/Scrap/others.jpg"
import paper from "../../assets/Scrap/paper.jpg"
import plastic from "../../assets/Scrap/plastic.jpg"

const Sell = () => {
    const [userData, setUserData] = useState({ area_pin: "", type: "" });

    const scrapCategoryData = [
        { id: 1, name: "Paper", image: paper },
        { id: 2, name: "Glass", image: glass },
        { id: 3, name: "Plastic", image: plastic },
        { id: 4, name: "Metals", image: metals },
        { id: 5, name: "E-waste", image: e_waste },
        { id: 6, name: "Others", image: others }
    ];

    const happyCustomer = [
        { dp: customer1, feedback: `The company is targeting one of the significant issues of our country that is "Waste Management".  The company is moving forward to achieving excellence through unique and innovative ideas, by taking the help of technology. Creating a bridge for people to dump their waste in the most efficient way.`, name: "Mayank Chaurasia" },
        { dp: customer2, feedback: `According to me, company has started achieving endeavours by successfully transforming the waste management sector through digitalization and various ongoing research ongoing in the company.`, name: "Saksham Singh" }
    ];

    // scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar />

            <div className="main_section">
                <SellFaqTopBanner title="Kabadi Techno Rates of Scrap" />
            </div>

            <ChangePincode
                pincode={userData.area_pin || "Select"}
            />

            <div className="scrap_section" id="sellyourscrap">
                {scrapCategoryData.map((eachData) => {
                    return (
                        <SellCard
                            key={eachData.id}
                            pic={eachData.image}
                            title={eachData.name}
                        />
                    );
                })}
            </div>

            <div className="main_section_carousel">
                <h1>Our Happy Customers</h1>
                {happyCustomer.length !== 0 ? (
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
                            {happyCustomer.map((eachDetails, eachDetailsIndex) => {
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

            <MainFooter />
            <TermFooter />
        </div>
    );
};

export default Sell;
