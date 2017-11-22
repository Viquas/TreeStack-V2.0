<?php

foreach($_POST as $k => $v) {
        ${$k} = $v;
}
$name = $_POST['name'];
$company = $_POST['company'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$domain = $_POST['domain'];
$detail = $_POST['detail'];


    $table ="<tr><td>".$name.'</td>';
    $table .="<td>".$company.'</td>';
    $table .="<td>".$email.'</td>';
    $table .="<td>".$phone.'</td>';
    $table .="<td>".$domain.'</td>';
    $table .="<td>".$detail.'</td></tr>';



function mailNow($table){
$today = date('Y-m-d H:i:s');
$to = "vicky@treestack.tech";
    $from = "vicky@treestack.tech";
    $subject = "New request for TreeStack - ".$today;

    $message ="
<html>
  <body>
        <b style='text-align:center'>New inquiry</b><br/>
        <br/>
    <table cellpadding='10'>
    <tr>
      <th>Name</th>
      <th>Company</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Domain</th>
      <th>Detail</th>
    </tr>

   ";
$message .= $table;
$message .="</table></body></html>";

   //end of message
     $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers  .= "From: $from\r\n";

    mail('vicky@treestack.tech',$subject , $message, $headers);
    // mail('help@treestack.tech',$subject , $message, $headers);
    // mail('kishan@dishq.in',$subject , $message, $headers);

}
?>
