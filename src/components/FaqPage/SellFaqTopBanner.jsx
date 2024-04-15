import React from "react"
import "../../styles/SellFaqTopBanner.css";

const SellFaqTopBanner = (props) => {
    return (
        <div className="sell_faq_top_banner">
            <h1>{props.title}</h1>
        </div>
    );
};

export default SellFaqTopBanner
