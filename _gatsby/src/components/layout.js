/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import css_reset from "../scss-css/css-reset.scss"
import style from "../scss-css/styles.scss"
import PropTypes, { string } from "prop-types"

const Layout = ({ children, className }) => {
  return (
    <>
      <Helmet>
        <link
          href={`${css_reset}`}
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link href={`${style}`} rel="stylesheet" type="text/css" media="all" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Muli"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <main className={className}>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: string,
}

export default Layout
