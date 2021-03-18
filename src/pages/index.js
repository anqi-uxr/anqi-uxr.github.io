import React from "react"

import SEO from "../components/common/seo"
import Header from "../components/main/Header"
import Projects from "../components/main/Projects"
import Footer from "../components/main/Footer"
import Navbar from "../components/common/Navbar"

import data from "../data/main-data"

import "../styles/mains.scss"

const IndexPage = () => (
  <>
    <Navbar data={data.navbarData}></Navbar>
    <SEO title="Anqi's Portfolio" />
    <Header></Header>
    <Projects></Projects>
    <Footer></Footer>
  </>
)

export default IndexPage
