import React, { useState } from "react"
import Swal from "sweetalert2"

import "../../styles/JoinUsForm.css"
import { TextField } from "@mui/material"

const JoinUsMentorForm = () => {
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
    });

    const getInputValue = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };

    const joinUs = async (e) => {
        e.preventDefault();
        if (
            inputValue.name !== "" &&
            inputValue.email !== "" &&
            inputValue.phone !== "" &&
            inputValue.linkedin !== ""
        ) {
            const linkedIn =
                /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            if (
                typeof inputValue.name === "string" &&
                !isNaN(inputValue.phone) &&
                inputValue.phone.length === 10 &&
                inputValue.linkedin.match(linkedIn)
            ) {
                try {
                    Swal.fire({
                        title: "Thank You!",
                        confirmButtonColor: "#56b124",
                    });
                    setInputValue({
                        name: "",
                        email: "",
                        phone: "",
                        linkedin: "",
                    });
                } catch (err) {
                    console.log(err);
                    Swal.fire({
                        title: "Enter valid email Id",
                        confirmButtonColor: "#56b124",
                    });
                }
            } else {
                Swal.fire({
                    title: "Please Enter Valid Inputs",
                    confirmButtonColor: "#56b124",
                });
            }
        }
    };

    return (
        <form className="join_us_form" onSubmit={joinUs}>
            <div className="sub_section">
                <TextField
                    className="input"
                    type="text"
                    label="Name"
                    variant="outlined"
                    name="name"
                    required
                    onChange={getInputValue}
                    value={inputValue.name}
                />
                <TextField
                    className="input"
                    type="email"
                    label="Email ID"
                    variant="outlined"
                    name="email"
                    required
                    onChange={getInputValue}
                    value={inputValue.email}
                />
            </div>
            <div className="sub_section">
                <TextField
                    className="input"
                    type="tel"
                    label="Phone Number"
                    variant="outlined"
                    name="phone"
                    required
                    onChange={getInputValue}
                    value={inputValue.phone}
                />
                <TextField
                    className="input"
                    type="url"
                    label="LinkedIn ID"
                    variant="outlined"
                    name="linkedin"
                    required
                    onChange={getInputValue}
                    value={inputValue.linkedin}
                />
            </div>
            <button type="submit">Join Us</button>
        </form>
    );
};

export default JoinUsMentorForm;
