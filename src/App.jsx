import React from "react"
import { Routes, Route } from "react-router-dom"

import About from "./components/AboutPage/About"
import JoinUs from "./components/JoinUsPage/JoinUs"
import Sell from "./components/SellPage/Sell"
import Faq from "./components/FaqPage/Faq"
import Contact from "./components/ContactPage/Contact"
import SignIn from "./components/SignIn/SignIn"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/joinus" element={<JoinUs />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  )
}

export default App