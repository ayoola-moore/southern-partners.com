import React from "react"
import PageBanner from "../components/pageBanner"
import Layout from "../components/layout"
import Navigations from "../components/navigations"
import SEO from "../components/seo"
import ContactContent from "../templates/contactContent"
import FooterCredit from "../components/footerCredit"

const ContactPage = () => (
  <Layout className={"contact_b"}>
    <SEO title="Contact us" />
    <PageBanner pageTitle={"contact us"} />
    <Navigations />
    <ContactContent />
    <FooterCredit />
  </Layout>
)

export default ContactPage
