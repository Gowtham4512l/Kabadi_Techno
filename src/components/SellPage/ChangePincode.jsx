import React from 'react';

import "../../styles/ChangePincode.css"

const ChangePincode = ({ pincode, openModal }) => {
    return (
        <p className="change_pincode">
            {pincode !== "Select" ? (
                <>Change your pincode <span>{pincode}</span></>
            ) : (
                <>Select your pincode <span>{pincode}</span></>
            )}
        </p>
    );
};


export default ChangePincode;