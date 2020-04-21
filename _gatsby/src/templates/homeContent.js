import React from "react"

export default function HomeContent() {
  return (
    <>
      <div id="services" className="services">
        <div className="container">
          <div className="service-box-line"></div>
          <div className="service-box">
            <p>PRODUCTS</p>
          </div>
          <p className="para1">
            Our product are design Long term energy contracts are designed{" "}
            <span>To lower your cost.</span>
          </p>
          <div className="service-grids">
            <div className="service-grid">
              <div className="fig">
                <span> </span>
              </div>
              <h4>Power</h4>
              <p>Purchase, sale, marketing, and delivery of power.</p>
            </div>
            <div className="service-grid">
              <div className="figx">
                <span> </span>
              </div>
              <h4>Crude Oil</h4>
              <p>Supply and delivery of Crude oil to offices, factory Etc.</p>
            </div>
            <div className="service-grid">
              <div className="fig3">
                <span> </span>
              </div>
              <h4>Natural gas</h4>
              <p>
                Source of energy for heating, cooking, electricity generation
                Etc.
              </p>
            </div>
            <div className="service-grid">
              <div className="fig1">
                <span> </span>
              </div>
              <h4>Renewables</h4>
              <p>
                Renewable energy includes sunlight, geothermal heat, wind,
                tides, water, and various forms of biomass.
              </p>
            </div>
            <div className="service-grid">
              <div className="fig2">
                <span> </span>
              </div>
              <h4>Petroleum Products</h4>
              <p>
                Petroleum products includes gasoline, jet fuel, diesel fuel,
                heating oil, and other fuel oils.{" "}
              </p>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>

        <div className="reports">
          <div>
            <button>
              <a
                href="http://ir.eia.gov/ngs/ngs.html"
                target="_blank"
                rel="noopener
noreferrer"
              >
                Natural Gas Storage Report
              </a>{" "}
            </button>
            <button>
              <a
                href="http://www.eia.gov/dnav/pet/pet_sum_sndw_dcus_nus_w.htm"
                target="_blank"
                rel="noopener
noreferrer"
              >
                Petroleum & Other Liquids Report
              </a>{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="about_quote">WHO WE ARE AND WHAT WE DO</div>

      <p className="about_p">
        Southern Partners is a marketer of power, crude oil, and natural gas, as
        well as other petroleum products and renewables. Southern Partners also
        provides consulting services. Southern Partners is in the business of
        structuring long-term custom energy contracts designed to lower our
        customers� costs. Southern Partners takes title to the energy
        commodities it sells. Southern Partners trades natural gas and
        electricity as commodities and manages the risks. Information is the
        vital element of any commodity business, and whatever entity can
        accumulate the most information and act on it most quickly will have a
        competitive advantage. Our team assimilates and acts on information
        quickly. At any moment, our team knows exactly where natural gas and
        power prices are trading throughout the country. Southern partners is a
        certified Minority Supplier, capable of competing against all
        competitor. Therefore purchasing from us will also help our customers
        achieve diversity purchasing goals and standards that has been
        established.
        <a href="about.php" className="f_more">
          find out more
        </a>
      </p>

      <div className="margin_space"></div>

      <div className="work" id="work">
        <div className="container">
          <div className="work-box-line"></div>
          <div className="work-box">
            <p>SERVICES</p>
          </div>
          <p className="para2">
            We provide other professional services in areas of human resource,
            financial consulting, environment consulting, and management
            consulting
          </p>
        </div>
      </div>

      <div className="portfoliolist">
        <div className="portfolio-wrapper">
          <a href="#" className="b-link-stripe b-animate-go" title="">
            <img className="img-responsive" src="images/human_resource.png" />
            <div className="b-wrapper">
              <div className="port">
                <h2 className="b-animate b-from-left    b-delay03 ">
                  <div className="text">
                    <h4>
                      Human <br />
                      Resources
                    </h4>
                  </div>
                </h2>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio-wrapper">
          <a href="#" className="b-link-stripe b-animate-go" title="">
            <img
              className="img-responsive"
              src="images/financial-services-consultant.jpg"
            />
            <div className="b-wrapper">
              <div className="port">
                <h2 className="b-animate b-from-left    b-delay03 ">
                  <div className="text">
                    <h4>
                      Financial <br />
                      consulting
                    </h4>
                  </div>
                </h2>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio-wrapper">
          <a href="#" className="b-link-stripe b-animate-go" title="">
            <img
              className="img-responsive"
              src="images/environmental_consulting.png"
            />
            <div className="b-wrapper">
              <div className="port">
                <h2 className="b-animate b-from-left    b-delay03 ">
                  <div className="text">
                    <h4>
                      Environmental <br />
                      Consulting
                    </h4>
                  </div>
                </h2>
              </div>
            </div>
          </a>
        </div>
        <div className="portfolio-wrapper">
          <a href="#" className="b-link-stripe b-animate-go" title="">
            <img
              className="img-responsive"
              src="images/management_consulting.png"
            />
            <div className="b-wrapper">
              <div className="port">
                <h2 className="b-animate b-from-left    b-delay03 ">
                  <div className="text">
                    <h4>
                      Management <br />
                      Consulting
                    </h4>
                  </div>
                </h2>
              </div>
            </div>
          </a>
        </div>
        <div className="clearfix"> </div>
        <div className="link">
          <a href="services.php" className="more_link">
            {" "}
            More services ...{" "}
          </a>
        </div>
      </div>

      <div className="revees"> </div>
    </>
  )
}
