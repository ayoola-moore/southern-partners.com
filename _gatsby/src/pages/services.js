import React from "react"
import Footer from "../components/footer"
import PageBanner from "../components/pageBanner"
import Layout from "../components/layout"
import Navigations from "../components/navigations"
import SEO from "../components/seo"
import HomeContent from "../templates/homeContent"

const ServicePage = () => (
  <Layout className={"contact_b"}>
    <SEO title="Home" />
    <PageBanner pageTitle={"products and services"} />
    <Navigations />
    <HomeContent />
    <Footer />
  </Layout>
)

export default ServicePage
