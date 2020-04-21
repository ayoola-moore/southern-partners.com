import React from "react"
import Footer from "../components/footer"
import HomeBanner from "../components/homeBanner"
import Layout from "../components/layout"
import Navigations from "../components/navigations"
import SEO from "../components/seo"
import HomeContent from "../templates/homeContent"

const IndexPage = () => (
  <Layout className={"home"}>
    <SEO title="Home" />
    <HomeBanner />
    <Navigations />
    <HomeContent />
    <Footer />
  </Layout>
)

export default IndexPage
