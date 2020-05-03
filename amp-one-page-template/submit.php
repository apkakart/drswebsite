<?php
  if(!empty($_POST)){
  $name=$_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['my_tel'];
  $enquiry = $_POST['enquiry'];
  $formcontent=" From: $name \n Phone: $my_tel";
  $recipient = "drabji71u@gmail.com";
  $subject = $enquiry;
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
  
         $domain_url = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
          header("Content-type: application/json");
          header("Access-Control-Allow-Credentials: true");
          header("Access-Control-Allow-Origin: ". str_replace('.', '-','https://drsureshmondal.in') .".cdn.ampproject.org");
          header("AMP-Access-Control-Allow-Source-Origin: " . $domain_url);
          header("Access-Control-Expose-Headers: AMP-Access-Control-Allow-Source-Origin");
          header("AMP-Redirect-To: https://drsureshmondal.in/contact.html");
          header("Access-Control-Expose-Headers: AMP-Redirect-To, AMP-Access-Control-Allow-Source-Origin"); 
          echo json_encode(array('name' => $name));
          exit;
  }
  ?>