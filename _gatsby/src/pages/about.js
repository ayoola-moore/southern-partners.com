import React from "react"
import Footer from "../components/footer"
import PageBanner from "../components/pageBanner"
import Layout from "../components/layout"
import Navigations from "../components/navigations"
import SEO from "../components/seo"
import HomeContent from "../templates/homeContent"

const AboutPage = () => (
  <Layout>
    <SEO title="About us" />
    <PageBanner pageTitle={"about us"} />
    <Navigations />
    <HomeContent />
    <Footer />
  </Layout>
)

export default AboutPage
