import React from "react"

export default function PageBanner({ pageTitle }) {
  return (
    <div className="header-bottom bg_img">
      <div className="wrapit">{pageTitle}</div>
    </div>
  )
}
