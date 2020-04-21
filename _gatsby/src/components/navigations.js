import { Link } from "gatsby"
import React from "react"

export default function Navigations() {
  return (
    <div className="banner-bottom">
      <div className="container">
        <div className="navi">
          <div className="head-logo">
            <Link to="/">
              <img src={"images/logo.png"} alt=" " />
              <span className="southern">Southern</span>{" "}
              <span className="partner"> Partners</span>
            </Link>
          </div>
          <div className="banner-nav">
            <span className="menu">
              <img src="images/menu.png" alt=" " />
            </span>
            <ul className="nav1">
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
