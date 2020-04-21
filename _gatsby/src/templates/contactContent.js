import React from "react"

export default function ContactContent() {
  return (
    <>
      <div className="map">
        <div id="southern_partners_map"></div>
      </div>

      <div id="contact" className="footer f_contact">
        <div className="footer-left">
          <div className="leave-comment">
            <form className="contact" action="sendmail.php" method="post">
              <input
                className="in1"
                type="text"
                placeholder="Name"
                required=" "
                name="name"
              />
              <input
                className="in2"
                type="email"
                placeholder="Email"
                required=" "
                name="email"
              />
              <input
                className="in3 no_margin_right"
                type="tel"
                placeholder="Tel"
                required=" "
                name="phone"
              />
              <textarea
                className="in4"
                placeholder="Type your message"
                required=" "
                name="message"
              ></textarea>
              <input type="submit" value="SEND" />
              <div className="clearfix"> </div>
            </form>
          </div>
        </div>
        <div className="footer-right c_info">
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
        </div>
        <div className="clearfix"> </div>
      </div>
      <div className="clearfix"> </div>

      <div className="body_margin"></div>
    </>
  )
}
