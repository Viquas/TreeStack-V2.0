<?php ?>
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
  <link href="css/talk.css" rel="stylesheet">

</head>
<body>
  <?php
   include 'loader.php';
   include 'header1.php';
   ?>

   <section class="simple-form lightsection">
   <div class="container">
     <div class="form-wrapper">
       <h3 class="form-title">Let's discuss your requirements, please fill in the form below</h3>
       <br/>
       <div class="form-container" style="visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
           <form action="https://www.artistsweb.com/process_form" id="contact-form" class="dropzone" enctype="multipart/form-data" method="post" accept-charset="utf-8">
         <div class="form-group input-group">
           <label>Full Name</label>
           <div class="input-block">
             <input name="first_name" placeholder="your full name" type="text">
             <div class="input-line"></div>
           </div>
         </div>
         <div class="form-group input-group">
           <label>Email Address</label>
           <div class="input-block">
             <input name="email" placeholder="your email address" type="email">
             <div class="input-line"></div>
           </div>
         </div>
         <div class="form-group input-group">
           <label>Phone Number</label>
           <div class="input-block">
             <input name="phone" placeholder="a number we can call you on" type="text">
             <div class="input-line"></div>
           </div>
         </div>
         <div class="form-group input-group">
           <label>Message</label>
           <div class="input-block">
             <textarea cols="10" name="message" placeholder="please describe your project, the basic idea with an overview of features required" rows="5"></textarea>
             <div class="input-line"></div>
           </div>
         </div>
         <div class="location-stripe">
           <div class="checkbox-block">
             <span>Choose Project:</span>
 				<div class="checkbox-single">
 					<input id="s-web" name="location-radio" type="checkbox" value="Website"> <label for="s-web">Website</label>
 				</div>
 				<div class="checkbox-single">
 					<input id="s-mob" name="location-radio" type="checkbox" value="App"> <label for="s-mob">Mobile App</label>
 				</div>
 				<div class="checkbox-single">
 					<input id="s-ux" name="location-radio" type="checkbox" value="ux"> <label for="s-ux">Interface/Experience Designing</label>
 				</div>
        <div class="checkbox-single">
 					<input id="s-brand" name="location-radio" type="checkbox" value="branding"> <label for="s-brand">Brand Identity</label>
 				</div>
           </div>
         </div>
 			          <button class="white-button work-button"  style="float:right" type="button">Submit enquiry</button>
     </div>
   </div>

 </section>

    <?php
      include 'footer.php';
    ?>
    <script
      src="https://code.jquery.com/jquery-3.2.1.min.js"
      integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
      crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
    <script src="js/menuhjks.js"></script>
    <script src="js/about.js"></script>
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
