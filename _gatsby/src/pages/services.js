import React from "react"
import Footer from "../components/footer"
import PageBanner from "../components/pageBanner"
import Layout from "../components/layout"
import Navigations from "../components/navigations"
import SEO from "../components/seo"
import ServiceContent from "../templates/servicesContent"

const ServicePage = () => (
  <Layout className={"contact_b"}>
    <SEO title="Services & products" />
    <PageBanner pageTitle={"products and services"} />
    <Navigations />
    <ServiceContent />
    <Footer />
  </Layout>
)

export default ServicePage
