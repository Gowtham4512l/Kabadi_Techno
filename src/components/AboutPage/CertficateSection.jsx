import React from "react"

import "../../styles/About_Certificate_Section.css"

import startup_certificate from "../../assets/certificate_new.svg"

const CertficateSection = () => {
    return (
        <div className="certificate_section">
            <h1>Startup India Certificate</h1>
            <img className="certificate" src={startup_certificate} alt="" />
        </div>
    )
}

export default CertficateSection
