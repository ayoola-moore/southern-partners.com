import React from "react"
import Footer from "../components/footer"
import PageBanner from "../components/pageBanner"
import Layout from "../components/layout"
import Navigations from "../components/navigations"
import SEO from "../components/seo"
import HomeContent from "../templates/homeContent"

const ContactPage = () => (
  <Layout className={"contact_b"}>
    <SEO title="Contact us" />
    <PageBanner pageTitle={"contact us"} />
    <Navigations />
    <HomeContent />
    <Footer />
  </Layout>
)

export default ContactPage
