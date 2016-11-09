<!DOCTYPE html>
<html class="js">
<?php include "includes/head.html"; ?>
	
<body class="b_contact">
<div id="preloader"></div>
<!-- header -->
<div class="header">
	<div class="header-bottom bg_img">
		<div class="wrapit">
			Products and Services
		</div>
	</div>
	<div class="container">
		<div class="navi">
			<div class="head-logo">
				<a href="index.php"><img src="images/logo.png" alt=" "><span class="southern">Southern</span> <span class="partner"> Partners</span></a>
			</div>
			<div class="banner-nav">
				<span class="menu"><img src="images/menu.png" alt=" "/></span>
				<ul class="nav1">
					<li><a href="index.php">HOME</a></li>
					<li class="active"><a href="services.php">Product & Services</a></li>
					<li><a href="about.php">ABOUT</a></li>
					<li><a href="contact.php">CONTACT</a></li>
				</ul>
			</div>
			<div class="clearfix"> </div>
		</div>
			<!-- script for menu -->
					<script> 
						$( "span.menu" ).click(function() {
						$( "ul.nav1" ).slideToggle( 300, function() {
						 // Animation complete.
						});
						});
					</script>
				<!-- //script for menu -->
	</div>
	</div>
<!-- //header -->
<!-- header-bottom -->
	<div class="header-bottom">
		<h3 class="h_intro">Products</h3>
	</div>
<!-- Slider-starts-Here -->
				<script src="js/responsiveslides.min.js"></script>
				 <script>
				    // You can also use "$(window).load(function() {"
				    $(function () {
				      // Slideshow 4
				      $("#slider2").responsiveSlides({
				        auto: true,
//				        pager: true,
//				        nav: true,
				        speed: 500,
						  pause: true,           // Boolean: Pause on hover, true or false
						  pauseControls: true,
				        namespace: "callbacks",
						  before: function () {
				          $('.events').append("<li>before event fired.</li>");
				        },
				        after: function () {
				          $('.events').append("<li>after event fired.</li>");
				        }
				      });
				
				    });
				  </script>
			<!--//End-slider-script -->
<!-- //header-bottom -->
<div  id="top" class="callbacks_container">
	<ul class="rslides" id="slider2">
		<li>
			<div class="header-bottom-info">
				<div class="header-bottom-left">
					<img src="images/energy.jpg" alt=" " />
				</div>

				<div class="clearfix"> </div>
			</div>
		</li>
		<li>
			<div class="header-bottom-info">
				<div class="header-bottom-left">
					<img src="images/renewable_energy.jpg" alt=" " />
				</div>
				<div class="clearfix"> </div>
			</div>
		</li>		<li>
			<div class="header-bottom-info">
				<div class="header-bottom-left">
					<img src="images/diagram.png" alt=" " />
				</div>
				<div class="clearfix"> </div>
			</div>
		</li>
		<li>
			<div class="header-bottom-info">
				<div class="header-bottom-left">
					<img src="images/petroleum.jpg" alt=" " />
				</div>
				<div class="clearfix"> </div>
			</div>
		</li>
		<li>
			<div class="header-bottom-info">
				<div class="header-bottom-left">
					<img src="images/natural_gas2.jpg" alt=" " />
				</div>

				<div class="clearfix"> </div>
			</div>
		</li>
	</ul>
	<div class="header-bottom-right">
		<h2 class="h2_t">Power, Natural Gas, Renewables, and Petroleum</h2>
		<p>We deliver this form of energy at the lowest possible cost. Renewable energy is generated from natural processes which are continuously replenished. This includes sunlight, geothermal heat, wind, tides, water, and various forms of biomass. This energy cannot be exhausted and is constantly renewed.
			<br>
			<br>
			<!--		<h2 class="add_padding h2_t">Petroleum</h2>-->
		<p>With our network of partners, delivering petroleum products are done promptly. We operate broadly and put our customers concerns first. As such, we deliver products in way that lowers your cost. </p>
		<br>
		<!--		<h2 class="add_padding h2_t">Natural gas</h2>-->
		<p>The wide range of uses for natural gas makes it a critical resource for the world economy. The uses of natural gas are broad. whatever your natural gas needs might be we are equipped to deliver.</p>
		</p>

		<div class="clearfix"> </div>
	</div>
</div>

<div class="clearfix"> </div>

<!--<div class="about_quote">-->
<!--	We'll like to hear from you-->
<!--</div>-->

<p class="about_p lines">
	Southern Partners provides wholesale energy commodities in deregulated markets.  Southern Partners builds its wholesale businesses through the creation of alliances and partnerships. These alliances and partnerships allows Southern Partners  access to third-party assets to participate in market-making activities. Each market in which Southern Partners operates utilizes these alliances and partnerships to deliver high quality products and services.

</p>

<div class="header-bottom">
	<h3 class="h_intro">services</h3>
</div>

<!-- Portfolio Starts Here -->
<div class="portfoliolist">
	<div class="portfolio-wrapper2">

		<p class="service_p"><span class="s_bold">Human Resources. </span>
			We play an important part in developing and making a company, or organization viable. </p>
		<a href="#" class="b-link-stripe b-animate-go"  title="">
			<img class="img-responsive" src="images/human_resource.png" />
			<div class="b-wrapper">
				<div class="port">
					<h2 class="b-animate b-from-left    b-delay03 ">
						<div class="text">

						</div>
					</h2>
				</div>
			</div>
		</a>

	</div>
	<div class="portfolio-wrapper2">
		<p class="service_p">      <span class="s_bold">Financial Consulting.</span>
			We work with companies or organizations to plan their financial future by offering information and guidance on topics that include taxes, investments, and insurance decisions.</p>
		<a href="#" class="b-link-stripe b-animate-go"  title="">
			<img class="img-responsive" src="images/financial-services-consultant.jpg" />
			<div class="b-wrapper">
				<div class="port">
					<h2 class="b-animate b-from-left    b-delay03 ">
						<div class="text">

						</div>
					</h2>
				</div>
			</div>
		</a>

	</div>
	<div class="portfolio-wrapper2">

		<p class="service_p"><span class="s_bold">Environmental Consulting. </span>We ensure that the client maintains an appropriate measure of compliance with environmental regulations through our consulting services.</p>
		<a href="#" class="b-link-stripe b-animate-go"  title="">
			<img class="img-responsive" src="images/environmental_consulting.png" />
			<div class="b-wrapper">
				<div class="port">
					<h2 class="b-animate b-from-left    b-delay03 ">
						<div class="text">
						</div>
					</h2>
				</div>
			</div>
		</a>

	</div>
	<div class="portfolio-wrapper2">
		<p class="service_p">		<span class="s_bold">Management Consulting. </span>
			We help organizations improve their performance. Operating primarily through the analysis of existing organizational problems and the development of plans for improvement.</p>
		<a href="#" class="b-link-stripe b-animate-go"  title="">
			<img class="img-responsive" src="images/management_consulting.png" />
			<div class="b-wrapper">
				<div class="port">
					<h2 class="b-animate b-from-left    b-delay03 ">
						<div class="text">
						</div>
					</h2>
				</div>
			</div>
		</a>

	</div>
	<div class="clearfix"> </div>


	<link rel="stylesheet" href="css/swipebox.css">
	<script src="js/jquery.swipebox.min.js"></script>
	<script type="text/javascript">
		jQuery(function($) {
			$(".swipebox").swipebox();
		});
	</script>
	<!-- Portfolio ends Here -->
</div>

<div class="margin_space"></div>

<!-- footer -->
	<?php include "includes/footer.html"; ?>
<!-- //footer -->
<!-- here stars scrolling icon -->
	<script type="text/javascript">
									$(document).ready(function() {
										/*
										var defaults = {
								  			containerID: 'toTop', // fading element id
											containerHoverID: 'toTopHover', // fading element hover id
											scrollSpeed: 1200,
											easingType: 'linear' 
								 		};
										*/
										
										$().UItoTop({ easingType: 'easeOutQuart' });
										
									});
	</script>
<!-- //here ends scrolling icon -->
</body>
</html>