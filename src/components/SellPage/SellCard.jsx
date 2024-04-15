import React from "react";
import Swal from "sweetalert2";

// css
import "../../styles/Sell.css";

const SellCard = (props) => {
    return (
        <button
            className="scrap_section_card"
            onClick={() => {
                Swal.fire({
                    title: "Enter Pincode",
                    confirmButtonColor: "#56b124",
                })
            }}
        >
            <img src={props.pic} alt="" />
            <p>{props.title[0].toUpperCase() + props.title.slice(1).toLowerCase()}</p>
        </button>
    );
};

export default SellCard;
