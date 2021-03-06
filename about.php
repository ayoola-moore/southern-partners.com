<!DOCTYPE html>
<html  class="js">
<?php include "includes/head.html"; ?>
	
<body>
<div id="preloader"></div>
<!-- header -->
<div class="header">
	<div class="header-bottom bg_img">
		<div class="wrapit">
			About us
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
					<li><a href="services.php">Product & Services</a></li>
					<li class="active"><a href="about.php">ABOUT</a></li>
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
	<h3>Corporate Values</h3>
</div>

<div class= "left_right">
	<div class="left">
		<ul class="left_ul">

			<li><span class="cor_val">Accountability:</span>  We are empowered to do what we say we will do, when we say we will do it, with a sense of urgency.
			</li>
			<li><span class="cor_val">Creating Value for Our Customers:</span> We are passionate and resourceful in delivering innovative products and services that create the best value for our customers.
			</li>
			<li><span class="cor_val">Diversity:</span> We derive strength from the diversity of our team.
			</li>
			<li><span class="cor_val">Integrity:</span> We hold ourselves to the highest professional and personal ethical standards.
			</li>
			<li><span class="cor_val">Respect:</span> We treat all team members and customers with respect, consideration and appreciation.
			</li>
			<li><span class="cor_val">Teamwork:</span> We all work together and communicate clearly to achieve our common goals.
			</li>
			<li><span class="cor_val">Trust:</span> We earn and maintain trust in all of our relationships.
			</li>
		</ul>

	</div>

	<div class="right">
		<img src="images/values.jpg" />

		<ul class="left_ul">
			<div class="mission">
				Through a network of alliances, Southern Partners is able to efficiently source products and services utilizing established partnerships and relationships to achieve ideal value and product quality.
				<h3>- Mission Statement</h3>
			</div>
		</ul>
	</div>

	<div class="clearfix"></div>

</div>
<div class="clearfix"></div>

<!--<div class="margin_space"></div>-->

<div class="about_quote">
	Management
</div>

<p class="about_p">

	Southern Partners is a certified woman minority-owned business with the Supplier Clearinghouse.  Southern Partners has unmatched business, energy and regulatory expertise.  Southern Partners consists of a well rounded management team with years of experience relating to energy commodities, operations management, and logistics.  Nicole “Nikki” Sias is the managing partner firmly committed to Southern Partners.
	<br>
	<br>
	Ms. Sias is the President and Chief Executive Officer, of Southern Partners, Inc. responsible for establishing the company structure as well as day-to-day operations of the company.  She is also responsible for evaluating and maintaining industry standards, developing personnel policies and procedures and ensures that company functions in these areas are consistent with overall company objectives, policies, procedures and best practices.
	<br>
	<br>
	Ms. Sias had a career in Personal Lines Insurance spanning over 16 years.  As a Marketing Representative, Ms. Sias managed broker accounts by evaluating market conditions, managing the business mix and retention of 100+ broker accounts, as well as monitoring and increasing agency performance and production.  Ms. Sias successfully grew her Los Angeles and Orange County territory into Permanent General Assurance Corporation’s most successful territory in California, writing an average of over $6 million in premiums per year.  Ms. Sias attended the University of Louisiana at Lafayette, majoring in Education.



</p>

<div class="margin_space"></div>


<!-- //header-bottom -->

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