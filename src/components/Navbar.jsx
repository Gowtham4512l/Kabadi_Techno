import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import "../styles/Navbar.css"
import logo from "../assets/logo.png"

import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar">
            <div>
                <NavLink to="/" className="logo">
                    <img src={logo} alt="Kabadi Techno Logo" />
                </NavLink>

                <ul className={isOpen ? "navlist navlist_active" : "navlist"}>

                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "navlink active_navlink" : "navlink")}
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            ABOUT
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/joinus"
                            className={({ isActive }) => (isActive ? "navlink active_navlink" : "navlink")}
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            JOIN US
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/sell"
                            className={({ isActive }) => (isActive ? "navlink active_navlink" : "navlink")}
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            SELL
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/faq"
                            className={({ isActive }) => (isActive ? "navlink active_navlink" : "navlink")}
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            FAQ
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? "navlink active_navlink" : "navlink")}
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            CONTACT
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/signin"
                            className={({ isActive }) => (isActive ? "navlink active_navlink" : "navlink")}
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            SIGN IN
                        </NavLink>
                    </li>

                </ul>

                <div
                    className="menu"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
