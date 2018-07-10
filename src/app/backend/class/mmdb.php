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





?>
