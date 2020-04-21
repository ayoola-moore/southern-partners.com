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
          <Carousel withoutControls={true} autoplay={true }>
            <img src="images/petrol-truck.jpg" alt=" " />
            <img src="images/energy.jpg" alt=" " />
            <img src="images/renewable_energy.jpg" alt=" " />
            <img src="images/diagram.png" alt=" " />

            <img src="images/oil.jpg" alt=" " />
            <img src="images/petroleum.jpg" alt=" " />
            <img src="images/natural_gas2.jpg" alt=" " />
          </Carousel>
        </div>
        <div className="header-bottom-right">
          <h2 className="h2_t">
            Power, Crude Oil, Natural Gas, Renewables, and Petroleum Products
          </h2>
          <p>
            We deliver this form of energy at the lowest possible cost.
            Renewable energy is generated from natural processes which are
            continuously replenished. This includes sunlight, geothermal heat,
            wind, tides, water, and various forms of biomass. This energy cannot
            be exhausted and is constantly renewed.
            <br />
            <br />
            <p>
              With our network of partners, delivering petroleum products are
              done promptly. We operate broadly and put our customers concerns
              first. As such, we deliver products in way that lowers your cost.{" "}
            </p>
            <br />
            <p>
              The wide range of uses for natural gas makes it a critical
              resource for the world economy. The uses of natural gas are broad.
              whatever your natural gas needs might be we are equipped to
              deliver.
            </p>
          </p>

          <div className="clearfix"> </div>
        </div>
      </div>

      <div className="clearfix"> </div>

      <p className="about_p lines">
        Southern Partners provides wholesale energy commodities in deregulated
        markets. Southern Partners builds its wholesale businesses through the
        creation of alliances and partnerships. These alliances and partnerships
        allows Southern Partners access to third-party assets to participate in
        market-making activities. Each market in which Southern Partners
        operates utilizes these alliances and partnerships to deliver high
        quality products and services.
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
