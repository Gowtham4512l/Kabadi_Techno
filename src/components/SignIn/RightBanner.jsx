import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import Swal from "sweetalert2"

import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

const RightBanner = () => {
    const [showPassword, setShowPassword] = useState(false);

    // show hide password
    const showHidePassword = () => {
        setShowPassword(!showPassword);
    };

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [tabBtn, setTabBtn] = useState("customer");

    const login = (e) => {
        e.preventDefault();

        if (inputEmail !== "") {
            let user = {
                "email": inputEmail,
                "password": inputPassword
            };

            console.log("Logging in...", user);

            const dummyResponse = {
                data: {
                    // msg: "Account Does Not Exist."
                    // msg: "Your account is not verified yet. Plz verify it first."
                    // msg: "Incorrect password"
                    msg: "Verified"
                }
            };

            setTimeout(() => {
                handleResponse(dummyResponse);
            }, 1000);
        }
    };

    const handleResponse = (res) => {
        if (res.data.msg === "Account Does Not Exist.") {
            Swal.fire({
                title: "Account doesn't exist. Signup first.",
                confirmButtonColor: "#56b124"
            })
        } else if (res.data.msg === "Your account is not verified yet. Plz verify it first.") {
            Swal.fire({
                title: "Account exist but email is not verified. Activation link sent to your mail. Please verify your email",
                confirmButtonColor: "#56b124"
            })
        } else if (res.data.msg === "Incorrect password") {
            Swal.fire({
                title: "Invalid Credentials",
                confirmButtonColor: "#56b124"
            })
        }
        else {
            Swal.fire({
                title: "Sucessfylly Logged In",
                confirmButtonColor: "#56b124"
            })
        }
    };

    return (
        <div className="section">
            <h1>Sign In</h1>
            <form className="form">
                <div className="signin_type_btns">
                    <button
                        className={`signin_type ${'customer' === tabBtn ? 'active' : ''}`}
                        key={`customer Button`}
                        onClick={() => setTabBtn('customer')}
                    >
                        Customer
                    </button>
                    <button
                        className={`signin_type ${'dealer' === tabBtn ? 'active' : ''}`}
                        key={`dealer Button`}
                        onClick={() => setTabBtn('dealer')}
                    >
                        Dealer
                    </button>
                </div>
                <TextField
                    className="input"
                    type="email"
                    label="Email ID"
                    variant="outlined"
                    onChange={(e) => setInputEmail(e.target.value)}
                    name="email"
                    value={inputEmail}
                    required
                />
                <FormControl variant="outlined" className="form_control">
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        required
                        label="Password"
                        className="input"
                        type={showPassword ? "text" : "password"}
                        value={inputPassword}
                        name="password"
                        onChange={(e) => setInputPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment>
                                <IconButton onClick={showHidePassword} edge="end">
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <NavLink
                    className="forgot_password_link"
                    to="/forget_password"
                >
                    Forgot Password?
                </NavLink>
                <button className="form_button" type="submit" onClick={(e) => { login(e); }}>
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default RightBanner;
