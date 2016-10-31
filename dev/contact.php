<!DOCTYPE html>
<html class="js">
<?php include "includes/head.html"; ?>
	
<body class="contact_b">
<div id="preloader"></div>

<!-- header -->

<div class="header">
	<div class="header-bottom bg_img">
		<div class="wrapit">
			Contact Us
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
					<li class="active"><a href="index.php">HOME</a></li>
					<li><a href="services.php">Product & Services</a></li>
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

<div class="map">
	<div id='southern_partners_map'></div>
</div>
<!--<div class="about_quote">-->
<!--	We'll like to hear from you-->
<!--</div>-->

<div id="contact" class="footer f_contact">
	<div class="footer-left">
		<div class="leave-comment">
			<form class="contact" action="sendmail.php" method="post">
				<input class="in1" type="text" placeholder="Name" required=" " name="name">
				<input class="in2" type="email" placeholder="Email" required=" " name="email">
				<input class="in3 no_margin_right" type="tel" placeholder="Tel" required=" " name="phone">
				<textarea class="in4" placeholder="Type your message" required=" " name="message"></textarea>
				<input type="submit" value="SEND">
				<div class="clearfix"> </div>
			</form>
		</div>

	</div>
	<div class="footer-right c_info">
		<h4><span>C</span>ontact Info</h4>
		<ul class="contact_ul">
			<li class="dot">638 Camino De Los Mares, Suite H130-450
				San Clemente, CA 92673-2848
			</li>
			<li class="mobile">888.PARTNER (727.8637)</li>
			<li class="mobile">949.498.5066</li>
			<li class="mes">info@southern-partners.com</li>
		</ul>
	</div>
	<div class="clearfix"> </div>
</div>
<div class="clearfix"> </div>

<div class="body_margin"></div>

<div class="footer_credit add_border">
	&copy; Southern Partners | Design by<a href="http://webtechandmore.org/"> webtechandmore</a>
</div>


				
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