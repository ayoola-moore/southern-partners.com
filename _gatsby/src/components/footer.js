import React from "react"
import FooterCredit from "./footerCredit.js"

export default function Footer() {
  return (
    <>
      <div id="contact" className="footer">
        <div className="footer-left">
          <div id="southern_partners_map">
            <img src="images/map-ca.png" />
          </div>
        </div>
        <div className="footer-right">
          <h4>
            <span>C</span>ontact Info
          </h4>
          <ul className="contact_ul">
            <li className="dot">
              Address: 999 Corporate Drive, Suite 100 Ladera Ranch, CA 92694
            </li>
            <li className="mobile">Tel: 888.PARTNER (727.8637)</li>
            <li className="mobile">Fax: 949.498.5066</li>
            <li className="mes">Email: info@southern-partners.com</li>
          </ul>
          <br />
          <br />
          <div className="contact">
            <a href="/contact">Get in touch</a>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      <div className="body_margin"></div>

      <FooterCredit />
    </>
  )
}
