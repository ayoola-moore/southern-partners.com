import React from "react"
import Footer from "../components/footer"
import PageBanner from "../components/pageBanner"
import Layout from "../components/layout"
import Navigations from "../components/navigations"
import SEO from "../components/seo"
import AboutContent from "../templates/aboutContent"

const AboutPage = () => (
  <Layout>
    <SEO title="About us" />
    <PageBanner pageTitle={"about us"} />
    <Navigations />
    <AboutContent />
    <Footer />
  </Layout>
)

export default AboutPage
