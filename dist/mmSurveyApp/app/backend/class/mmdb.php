<?php

// ------------------------------- //
// --- Database Connetion -------- //
// ------------------------------- //

class MMDB{

  private $uploadTime;
  private $connStatus;
  private $form;
  private $conn;

  function MMDB(){

    // Time Stamp //
    $t=time();
    $this->uploadTime = date("Y-m-d",$t);





  }

  function getDate(){
    return $this->uploadTime;
  }
  function getConnStatus(){
    return $this->connStatus;
  }
  function appendForm($form){

        // Database Connection //
    $DB_Username = "mayorgac_abogado";
    $DB_Password = "suaita.monteria";
    $DB_Host     = "127.0.0.1";
    $DB_Database   = "mayorgac_abogados";
    $DB_Table = "db_especialistas";

    $this->conn = $Conn;

    $Conn = new mysqli($DB_Host,$DB_Username,$DB_Password,$DB_Database);
    if ($Conn->connect_error) {
       $connStatus =  $connStatus.$Conn->connect_error;
       echo $connStatus;
    }

    if (!$Conn->set_charset("utf8")) {
         $connStatus =  $connStatus.$Conn->connect_error;
         echo $connStatus;
    }

    $conn = $this->conn;

    $keys = $form->keys;
    $data = $form->data;

    $queryKeys = " (";
    $queryValues = " (";

    for ($x = 0; $x <= (count($keys) - 1); $x++) {
      $queryKeys = $queryKeys.$keys[$x].",";
      $queryValues = $queryValues."'".$data[$x]."'".",";
    }
    $queryKeys = $queryKeys.$keys[(count($keys) - 1)].") ";
    $queryValues = $queryValues.$data[(count($keys) - 1)].") ";

    $sql = "INSERT INTO db_especialistas".$queryKeys."VALUES ".$queryValues;
    $returnvar = "";
    if ($conn->query($sql) === TRUE) {
        $returnvar = "New record created successfully";
    } else {
        $returnvar = "Error: " . $sql . "<br>" . $conn->error;
    }

    $Conn->close();
    return $returnvar;
  }


}





?>
