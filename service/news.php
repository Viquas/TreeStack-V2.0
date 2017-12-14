<?php
$email = $_POST['email'];
mailNow($email);
function mailNow($email){
$today = date('Y-m-d H:i:s');
$to = "vicky@treestack.tech";
    $from = "vicky@treestack.tech";
    $subject = "New request for TreeStack - ".$today;

    $message ="
<html>
  <body>
        <b style='text-align:center'>Newsletter Mail</b><br/>
        <br/>
        <p>Request from the email ";
   $message .= $email;
   $message .=" </p></body></html>";

   //end of message
     $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers  .= "From: $from\r\n";

    mail('vicky@treestack.tech',$subject , $message, $headers);
}
?>
