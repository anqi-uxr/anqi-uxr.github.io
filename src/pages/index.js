import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Anqi's Portfolio" />
    <Header></Header>
    <Work></Work>
    <Skills></Skills>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
