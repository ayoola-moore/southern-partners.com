import React from "react"
import FooterCredit from "./footerCredit"

export default function Footer() {
  return (
    <>
      <div id="contact" className="footer">
        <div className="footer-left">
          <div id="southern_partners_map"></div>
        </div>
        <div className="footer-right">
          <h4>
            <span>C</span>ontact Info
          </h4>
          <ul className="contact_ul">
            <li className="dot">
              Address: 638 Camino De Los Mares, Suite H130-450 San Clemente, CA
              92673-2848
            </li>
            <li className="mobile">Tel: 888.PARTNER (727.8637)</li>
            <li className="mobile">Fax: 949.498.5066</li>
            <li className="mes">Email: info@southern-partners.com</li>
          </ul>
          <br />
          <br />
          <div className="contact">
            <a href="contact.php">Get in touch</a>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      <div className="body_margin"></div>

      <FooterCredit />
    </>
  )
}
