<?php

  // ----------------------------------------------//
  // ----- Backend Script for MM Tohyo Forms ------//
  // ----------------------------------------------//

  include('./header.php');
  include('./settings.php');
  include('./class/mmfile.php');
  include('./class/mmform.php');
  include('./class/mmdb.php');

  //$mFileProposal = new MMFile();
  //$mFileResource = new MMFile();
  //$mFileConcept = new MMFile();

  $mmDB = new MMDB();

  echo $mmDB->getDate();
  // --------------------------------------------//

?>
