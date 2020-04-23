import React from "react"
import { string } from "prop-types"

const PageBanner = ({ pageTitle }) => {
  return (
    <div className="header-bottom bg_img">
      <div className="wrapit">{pageTitle}</div>
    </div>
  )
}

PageBanner.propTypes = {
  pageTitle: string,
}

export default PageBanner
