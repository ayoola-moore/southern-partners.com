import { Link } from "gatsby"
import React, { useState } from "react"

export default function Navigations() {
  const [showMobileNav, setMobileNavState] = useState(false)

  return (
    <div className="banner-bottom">
      <div className="container">
        <div className="navi">
          <div className="head-logo">
            <Link to="/">
              <span className="southern">Southern</span>{" "}
              <span className="partner"> Partners</span>
              {/* <img src={"images/logo.png"} alt=" " /> */}
            </Link>
          </div>
          <div className="banner-nav">
            <span
              className="menu"
              onClick={() => {
                setMobileNavState(!showMobileNav)
              }}
            >
              <img src="images/menu.png" alt=" " />
            </span>
            <ul className={`nav1 ${showMobileNav ? "displayNav" : ""}`}>
              <li className="active">
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/services">Product & Services</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  )
}
