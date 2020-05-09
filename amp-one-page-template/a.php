<?php
header('Access-Control-Allow-Origin: http://localhost:7700');
header('Access-Control-Allow-Credentials: true');

if(!empty($_POST)){
$myJSON = json_encode($_POST);
      echo $myJSON;
   }
?>