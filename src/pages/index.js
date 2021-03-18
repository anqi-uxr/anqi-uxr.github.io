import React from "react"

import Layout from "../components/layout"
import SEO from "../components/main/seo"
import Header from "../components/main/Header"
import Projects from "../components/main/Projects"
import Footer from "../components/main/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Anqi's Portfolio" />
    <Header></Header>
    <Projects></Projects>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
