<?php

// ------------------------------- //
// --- Database Connetion -------- //
// ------------------------------- //

class MMDB{

  private $uploadTime;
  private $connStatus;

  function MMDB(){

    // Time Stamp //
    $t=time();
    $this->uploadTime = date("Y-m-d",$t);

    // Database Connection //
    $DB_Username = "mayorgac_abogado";
    $DB_Password = "suaita.monteria";
    $DB_Host     = "127.0.0.1";
    $DB_Database   = "mayorgac_abogados";
    $DB_Table = "db_especialistas";
    echo $DB_Database."\n";
    echo "<br>";
    echo $DB_Host."\n";
    echo "<br>";
    echo $DB_Password."\n";
    echo "<br>";
    echo $DB_Username."\n";
    $Conn = new mysqli($DB_Host,$DB_Username,$DB_Password,$DB_Database);
    if ($Conn->connect_error) {
       $connStatus =  $connStatus.$Conn->connect_error;
       echo $connStatus;
    }

    if (!$Conn->set_charset("utf8")) {
         $connStatus =  $connStatus.$Conn->connect_error;
         echo $connStatus;
    }

  }

  function getDate(){
    return $this->uploadTime;
  }
  function getConnStatus(){
    return $this->connStatus;
  }
  function append($keys,$data){
    return "ok";
  }


}





?>
