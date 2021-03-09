import React from "react"

import Layout from "../components/layout"
import SEO from "../components/main/seo"
// Components
import Header from "../components/main/Header"
import Work from "../components/main/Work"
import Skills from "../components/main/Skills"
import Footer from "../components/main/Footer"

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
