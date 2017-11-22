<?php
date_default_timezone_set('Europe/London');
$london_time = date("h:i a");
date_default_timezone_set('Asia/Dubai');
$dubai_time = date("h:i a");
date_default_timezone_set('Asia/Kolkata');
$india_time = date("h:i a");
$london = false;
$india = false;
$dubai = false;
$sunrise = "10:00 am";
$sunset = "8:00 pm";
$l = DateTime::createFromFormat('H:i a', $london_time);
$d = DateTime::createFromFormat('H:i a', $dubai_time);
$i = DateTime::createFromFormat('H:i a', $india_time);

$start = DateTime::createFromFormat('H:i a', $sunrise);
$end = DateTime::createFromFormat('H:i a', $sunset);


if ($l > $start && $l < $end)
{
  $london = true;
}
if ($d > $start && $d < $end)
{
  $dubai = true;
}
if ($i > $start && $i < $end)
{
  $india = true;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>TreeStack - App &amp; Web Development Agency</title>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="author" content="Ahmed Viquas">
  <meta name="description" content="Treestack Tech | App &amp; Web Development Agency"/>
  <meta name="robots" content="noodp"/>
  <link rel="canonical" href="https://treestack.tech/" />
  <link href="images/favicon.png" rel="shortcut icon" />
  <link rel=icon href="images/favicon.png">
  <meta property="og:locale" content="en_GB" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="TreeStack - App &amp; Web Development Agency" />
  <meta property="og:description" content="App &amp; Web Development Agency" />
  <meta property="og:url" content="https://treestack.tech/" />
  <meta property="og:site_name" content="Treestack Tech | App &amp; Web Development Agency" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:description" content=" App &amp; Web Development Agency" />
  <meta name="twitter:title" content="Treestack Tech - App &amp; Web Development Agency" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#fff" />

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="css/style.css" rel="stylesheet">
  <link href="css/contact.css" rel="stylesheet">

</head>
<body>
  <?php
   include 'loader.php';
   include 'header1.php';
   ?>

  <section class="contact-top">
    <div class="container ">
      <div class="b-img"></div>
      <div class="row ts-lift">
        <div class="col-sm-12">
          <h1 class="backlit"> Contact Us </h1>
          <div class="m-text">
            <h3>Get in touch with us  </h3>
            <p class="">We'd love to hear about your project</p>
            <a href="talk.php"><button class="white-button work-button">Let's talk</button></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="homepage-hero-module">
          <div class="adCard">
              <div class="pad">
          <h3 class="city">London</h3>
          <hr class="cityLine"><br/>
          <p class="address">Cygnus Business Center,<br/>
          Dalmeyer Road, London,<br/>
          NW 10 2XA, UK</p>
          <?php
            if($london){
              echo '<p class="time-text">Open now</p><img src="images/sun.png" class="time-icon" id="lon">';
            }else{
                echo '<p class="time-text">Closed now</p><img src="images/moon.png" class="time-icon" id="lon">';
            }
          ?>

          <p class="time-lite">Hours (10 A.M - 8 P.M) UTC 00:00 </p>
          <p class="time-text">Current Time: <?php date_default_timezone_set('Europe/London');
            echo date("h:i A")?></p>
         </div>
        </div>
        </div>
        </div>
        <div class="col-sm-4">
            <div class="homepage-hero-module">
          <div class="adCard">
            <div class="filter"></div>
            <video autoplay loop class="fillWidth">
           <source src="videos/food.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.</video>
            <div class="pad">
          <h3 class="city">Dubai</h3>
          <hr class="cityLine"><br/>
          <p class="address">Office 811, Concord tower,<br/>
          Dubai Media City, Dubai,<br/>
          UAE. PO BOX 336181</p>

          <?php
            if($dubai){
              echo '<p class="time-text">Open now</p><img src="images/sun.png" class="time-icon" id="lon">';
            }else{
                echo '<p class="time-text">Closed now</p><img src="images/moon.png" class="time-icon" id="lon">';
            }
          ?>
          <p class="time-lite">Hours (10 A.M - 8 P.M) UTC+04:00 </p>
          <p class="time-text">Current Time: <?php date_default_timezone_set('Asia/Dubai');
            echo date("h:i A")?></p>


           <!-- <div class="poster hidden">
            <img src="http://www.videojs.com/img/poster.jpg" alt="">
          </div> -->
        </div>
        </div>
        </div>
      </div>
        <div class="col-sm-4">
            <div class="homepage-hero-module">
          <div class="adCard">
            <div class="filter">
              <!-- <h3 class="topCity">India</h3> -->
            </div>
            <video autoplay loop class="fillWidth">
           <source src="videos/food.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.</video>
           <div class="pad">
          <h3 class="city">India</h3>
          <hr class="cityLine"><br/>
          <p class="address">#549, 1st Floor, 14th<br/>
          Main Road, HSR Layout,<br/>
          Sector 7, Banglore, Karnataka.</p>

          <?php
            if($india){
              echo '<p class="time-text">Open now</p><img src="images/sun.png" class="time-icon" id="lon">';
            }else{
                echo '<p class="time-text">Closed now</p><img src="images/moon.png" class="time-icon" id="lon">';
            }
          ?>
          <p class="time-lite">Hours (10 A.M - 8 P.M) UTC+05:30 </p>
          <p class="time-text">Current Time: <?php date_default_timezone_set('Asia/Kolkata');
            echo date("h:i A")?></p>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </section>
  <section class="parallax">
    <div class="container">
      <div class="row">
        <div class="col-sm-5">
          <p class="c-text">Email</p>
          <hr class="whiteLine"><br/>
          <h4> help@treestack.tech</h4>
        </div>
        <div class="col-sm-5">
          <p class="c-text ts-top">Phone</p>
          <hr class="whiteLine"><br/>
          <h4> UK +44 (0) 203 287 3302</h4>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container ">
      <div class="b-img"></div>
      <div class="row ts-lift">
        <div class="col-sm-12">
          <h1 class="backlit"> Follow Us </h1>
        </div>
        <div class="col-sm-4">

          <a class="socio-link" href="#"><i class="fa fa-medium"></i> </a>
            <a class="socio-link" href="#"><i class="fa fa-behance"></i> </a>
             <a class="socio-link" href="#"><i class="fa fa-dribbble"></i> </a>
              <a class="socio-link" href="#"><i class="fa fa-twitter"></i> </a>
               <a class="socio-link" href="#"><i class="fa fa-instagram"></i> </a>
               <a class="socio-link" href="#"><i class="fa fa-facebook"></i> </a>

        </div>
        <div class="col-sm-8">
          <hr class="f-line">
        </div>
      </div>
    </div>
  </section>


    <script
      src="https://code.jquery.com/jquery-3.2.1.min.js"
      integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
      crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
    <script src="js/menuhjks.js"></script>
    <script src="js/contact.js"></script>


    <!-- <script>
    window.sr = ScrollReveal();
    sr.reveal('.ts-sec-grad-down',{ duration: 1000 });
    sr.reveal('#intro',{ duration: 1000 });
    sr.reveal('.ts-sec-grad',{ duration: 3000 });
    sr.reveal('.company-logo',{ duration: 1000 },50);
    sr.reveal('.ts-up',{ duration: 2000 },100);
    sr.reveal('footer',{ duration: 2000 },100);
    </script> -->
  </body>
  </html>
