import React, { useState, useEffect } from "react"
import Swal from "sweetalert2"

import Navbar from "../Navbar"
import MainFooter from "../Footer/MainFooter"
import TermFooter from "../Footer/TermFooter"

import "../../styles/Contact.css"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"

const Contact = () => {
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getInputValue = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };

    const contactUs = async (e) => {
        e.preventDefault();

        try {

            setInputValue({ name: "", email: "", subject: "", message: "" });
            Swal.fire({
                title: "We recieved your message.\n Thank You!",
                confirmButtonColor: "#56b124",
            });
        } catch (err) {
            Swal.fire({
                title: "Please enter valid Email Id",
                confirmButtonColor: "#56b124",
            });
        }
    };

    return (
        <div>
            <Navbar />
            <div className="contact_section">
                <div className="contact_info">
                    <h1>CONTACT US</h1>
                    <div className="contact_info_card">
                        <LocationOnIcon />
                        <div>
                            <p>HEAD OFFICE ADDRESS</p>
                            <span>16, South Arjun Nagar agra Pincode:- 282001</span>
                        </div>
                    </div>
                    <div className="contact_info_card">
                        <EmailIcon />
                        <div>
                            <p>OFFICIAL EMAIL</p>
                            <span>Info@kabaditechno.com</span>
                        </div>
                    </div>
                    <div className="contact_info_card">
                        <PhoneIcon />
                        <div>
                            <p>CONTACT NUMBER</p>
                            <span>
                                7503386621
                                <br />
                                9773857717
                            </span>
                        </div>
                    </div>
                </div>

                <div className="contact_form">
                    <h1>Send Your Queries</h1>
                    <form onSubmit={contactUs}>
                        <input
                            type="text"
                            required
                            placeholder="Enter Your Name"
                            name="name"
                            value={inputValue.name}
                            onChange={getInputValue}
                        />
                        <input
                            type="email"
                            required
                            placeholder="Enter Your Email id"
                            name="email"
                            value={inputValue.email}
                            onChange={getInputValue}
                        />
                        <input
                            type="text"
                            required
                            placeholder="Subject"
                            name="subject"
                            value={inputValue.subject}
                            onChange={getInputValue}
                        />
                        <textarea
                            rows="5"
                            required
                            placeholder="Write Your Message..."
                            name="message"
                            value={inputValue.message}
                            onChange={getInputValue}
                        ></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <MainFooter />
            <TermFooter />
        </div>
    );
};

export default Contact
