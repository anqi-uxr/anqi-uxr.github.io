import React from "react"

import SEO from "../components/common/seo"
import Navbar from "../components/common/Navbar"

import data from "../data/about-data"

import "../styles/mains.scss"

const About = () => (
  <>
    <Navbar data={data.navbarData}></Navbar>
    <SEO title="About" />
  </>
)

export default About
