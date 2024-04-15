import React, { useState } from "react"
import Swal from "sweetalert2"

import "../../styles/JoinUsForm.css"
import { TextField, FormControl, Select } from "@mui/material"

const JoinUsMentorForm = () => {
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        option: "",
        file: "",
    });

    const getInputValue = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };

    const getFile = (e) => {
        setInputValue({ ...inputValue, file: e.target.files[0] });
    };

    const joinUs = async (e) => {
        e.preventDefault();
        if (
            inputValue.name !== "" &&
            inputValue.email !== "" &&
            inputValue.phone !== "" &&
            inputValue.linkedin !== "" &&
            inputValue.option !== "" &&
            inputValue.file !== ""
        ) {
            if (inputValue.file.type === "application/pdf") {
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
                            title: "We recieved your application. \n Thank you!",
                            confirmButtonColor: "#56b124",
                        });
                        setInputValue({
                            name: "",
                            email: "",
                            phone: "",
                            linkedin: "",
                            option: "",
                            file: "",
                        });
                    } catch (err) {
                        console.log(err);
                        Swal.fire({
                            title: "enter valid email Id",
                            confirmButtonColor: "#56b124",
                        });
                    }
                } else {
                    Swal.fire({
                        title: "Please Enter Valid Inputs",
                        confirmButtonColor: "#56b124",
                    });
                }
            } else {
                setInputValue({ ...inputValue, file: "" });
                Swal.fire({
                    title: "Please upload .pdf file",
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
            <div className="sub_section">
                <FormControl variant="outlined" className="input">
                    <Select
                        native
                        required
                        onChange={getInputValue}
                        name="option"
                        value={inputValue.option}
                    >
                        <option value="">Select field</option>
                        <option value={"financial management"}>Financial management</option>
                        <option value={"IT management"}>IT management</option>
                        <option value={"business development"}>Business development</option>
                        <option value={"marketing head"}>Marketing head</option>
                        <option value={"envirormental expert"}>Envirormental expert</option>
                        <option value={"chemical r&d"}>Chemical R&D</option>
                    </Select>
                </FormControl>
                <label
                    htmlFor="file"
                    style={
                        inputValue.file === ""
                            ? { backgroundColor: "#ff7373" }
                            : { backgroundColor: "#35ce72" }
                    }
                >
                    {inputValue.file === "" ? "Upload Your CV (.pdf)" : "CV Uploaded"}
                </label>
                <input
                    style={{ display: "none" }}
                    id="file"
                    type="file"
                    name="file"
                    accept="application/pdf"
                    required
                    onChange={getFile}
                    onClick={(e) => {
                        e.target.value = null;
                    }}
                />
            </div>
            <button type="submit">Join Us</button>
        </form>
    );
};

export default JoinUsMentorForm;
