import React from "react"
import Carousel from "nuka-carousel"

export default function ServicesContent() {
  return (
    <>
      <div className="header-bottom">
        <h3 className="h_intro">Products</h3>
      </div>
      <div id="top" className="callbacks_container">
        <div className="rslides" id="slider2">
          <Carousel withoutControls={true} autoplay={true}>
            <img src="images/petrol-truck.jpg" alt=" " />
            {/* <img src="images/energy.jpg" alt=" " /> */}
            <img src="images/renewable_energy.jpg" alt=" " />
            <img src="images/diagram.png" alt=" " />

            {/* <img src="images/oil.jpg" alt=" " /> */}
            {/* <img src="images/petroleum.jpg" alt=" " /> */}
            {/* <img src="images/natural_gas2.jpg" alt=" " /> */}
          </Carousel>
        </div>
        <div className="header-bottom-right">
          <h2 className="h2_t">Petroleum Products and Renewables</h2>
          <br />
          <br />
          <p>
            Southern Partners delivers petroleum products at the lowest possible
            cost. Our network of partners, allows us to deliver petroleum
            products safely and on time at your desired location.
            <br />
            <br />
            Renewable energy is generated from natural prosses which are
            continuously replenished. This includes sunlight, geothermal heat,
            wind, tides, water, and various form of biomass. This energy cannot
            be exhausted.
          </p>

          <div className="clearfix"> </div>
        </div>
      </div>

      <div className="clearfix"> </div>

      <p className="about_p lines">
        Southern Partners provides wholesale petroleum products and renewables.
        Southern Partners builds its wholesale business through the creation of
        alliances and partnerships. These alliances and partnerships allows
        Southern Partners to access to third-party assets to effectively compete
        in most petroleum products and renewable markets around the country.
        Each market in which Southern Partners operates utilizes these alliances
        and partnerships to deliver high quality products and services.
      </p>

      <div className="header-bottom">
        <h3 className="h_intro">services</h3>
      </div>

      <div className="portfoliolist">
        <div className="portfolio-wrapper2">
          <p className="service_p">
            <span className="s_bold">Human Resources. </span>
            We play an important part in developing and making a company, or
            organization viable.{" "}
          </p>
          <a href="#" className="b-link-stripe b-animate-go" title="">
            <img className="img-responsive" src="images/human_resource.png" />
            <div className="b-wrapper">
              <div className="port">
                <h2 className="b-animate b-from-left    b-delay03 ">
                  <div className="text"></div>
                </h2>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio-wrapper2">
          <p className="service_p">
            {" "}
            <span className="s_bold">Financial Consulting.</span>
            We work with companies or organizations to plan their financial
            future by offering information and guidance on topics that include
            taxes, investments, and insurance decisions.
          </p>
          <a href="#" className="b-link-stripe b-animate-go" title="">
            <img
              className="img-responsive"
              src="images/financial-services-consultant.jpg"
            />
            <div className="b-wrapper">
              <div className="port">
                <h2 className="b-animate b-from-left    b-delay03 ">
                  <div className="text"></div>
                </h2>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio-wrapper2">
          <p className="service_p">
            <span className="s_bold">Environmental Consulting. </span>We ensure
            that the client maintains an appropriate measure of compliance with
            environmental regulations through our consulting services.
          </p>
          <a href="#" className="b-link-stripe b-animate-go" title="">
            <img
              className="img-responsive"
              src="images/environmental_consulting.png"
            />
            <div className="b-wrapper">
              <div className="port">
                <h2 className="b-animate b-from-left    b-delay03 ">
                  <div className="text"></div>
                </h2>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio-wrapper2">
          <p className="service_p">
            {" "}
            <span className="s_bold">Management Consulting. </span>
            We help organizations improve their performance. Operating primarily
            through the analysis of existing organizational problems and the
            development of plans for improvement.
          </p>
          <a href="#" className="b-link-stripe b-animate-go" title="">
            <img
              className="img-responsive"
              src="images/management_consulting.png"
            />
            <div className="b-wrapper">
              <div className="port">
                <h2 className="b-animate b-from-left    b-delay03 ">
                  <div className="text"></div>
                </h2>
              </div>
            </div>
          </a>
        </div>
        <div className="clearfix"> </div>
      </div>

      <div className="margin_space"></div>
    </>
  )
}
