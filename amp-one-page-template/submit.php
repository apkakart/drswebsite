<?php
       header("AMP-Same-Origin: true");
       header("Alt-Svc: clear");
       header("Content-type:application/json; charset=utf-8");
       header("Strict-Transport-Security: max-age=63072000; includeSubDomains; preload");
       header("Access-Control-Allow-Origin: https://drsureshmondal.in");
       header("Access-Control-Allow-Credentials: true");
       header("Cache-Control: public,max-age=3600,stale-while-revalidate=7200, no-cache");
       header("AMP-Access-Control-Allow-Source-Origin: https://drsureshmondal.in");
       header("AMP-Redirect-To: https://drsureshmondal.in/index.php");
       header("Access-Control-Expose-Headers: AMP-Redirect-To, AMP-Access-Control-Allow-Source-Origin"); 
      $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "info@drsureshmondal.in.com";
$subject = "Contact Form";
  echo json_encode(array('name' => $name));
       
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");

        exit;

?>