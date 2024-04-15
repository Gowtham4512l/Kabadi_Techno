import React from "react"

import Navbar from "../Navbar"
import TermFooter from "../Footer/TermFooter"

import LeftBanner from "./LeftBanner"
import RightBanner from "./RightBanner"

import "../../styles/SignIn.css"

const SignIn = () => {
    return (
        <div>
            <Navbar />
            <div className="auth_section">
                <LeftBanner />
                <RightBanner />
            </div>
            <TermFooter />
        </div>
    )
}

export default SignIn