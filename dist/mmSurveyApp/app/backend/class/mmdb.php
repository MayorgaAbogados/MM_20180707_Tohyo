<?php

// ------------------------------- //
// --- Database Connetion -------- //
// ------------------------------- //

class MMDB{

  private $uploadTime;

  function MMDB(){
    $t=time();
    $this->uploadTime = date("Y-m-d",$t);
  }

  function getDate(){
    return $this->uploadTime;
  }
}













$Conn = new mysqli($DB_Host , $DB_Username, $DB_Password, $DB_Database);
$ConnStatus = "";
// Check connection
if ($Conn->connect_error) {
    die("Connection failed : " . $Conn->connect_error);
    $ConnStatus = $ConnStatus."Database Connection : Error , ";
}

if (!$Conn->set_charset("utf8")) {
    $ConnStatus = $ConnStatus."Database UTF8 Error :".$Conn->error);
}



?>
