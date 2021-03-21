import React from "react"

import SEO from "../components/common/seo"
import Navbar from "../components/common/Navbar"
import TwoColumn from "../components/common/TwoColumn"

import data from "../data/about-data"

import "../styles/mains.scss"
import "../styles/about.scss"

const About = () => (
  <>
    <Navbar data={data.navbarData}></Navbar>
    <SEO title="About" />

    <div className="about-container">

      <TwoColumn>

        <div className="about-picture">
          <img src={data.picture} />
        </div>

        <div className="about-content">
          <h1>Hello! 👋</h1>
          <p>
            I'm a UX researcher with a background in psychology and behavior research. I am a human-enthusiastic. I enjoy studying people, diving into people's lives and minds, understanding their lifestyles, experiences, and motivations.
          </p>
          <p>
            I care deeply about making meaningful social impacts through my research. You can read more in detail in my case studies how my research benefits beyond the scope of a product and reach into promoting species diversity through caring about honeybees, raising open science awareness, and equalizing student access to educational resources.
          </p>
          <p>
            Outside of work, I enjoy spending time with my kitties😼, developing recipes in my kitchen👨‍🍳‍, and cycling 🚴‍♀️ .
        </p>
        </div>

      </TwoColumn>
    </div>
  </>
)

export default About
