import React from "react"
import Iframe from "react-iframe"

export default function ContactContent() {
  return (
    <>
      <div className="map">
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.8868578487036!2d-117.63219618437492!3d33.55631585114748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcedcdbb83b1d7%3A0xc36a614740e56e6d!2s999%20Corporate%20Dr%20%23100%2C%20Ladera%20Ranch%2C%20CA%2092694%2C%20USA!5e0!3m2!1sen!2smu!4v1590335107208!5m2!1sen!2smu"
          width="100%"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></Iframe>
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
              999 Corporate Drive, Suite 100 Ladera Ranch, CA 92694
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
