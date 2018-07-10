<?php

  // ----------------------------------------------//
  // ----- Backend Script for MM Tohyo Forms ------//
  // ----------------------------------------------//

  include('./header.php');
  include('./settings.php');
  include('./class/mmfile.php');
  include('./class/mmform.php');
  include('./class/mmdb.php');

  $mFileProposal = new MMFile('FileProposal');
  $mFileResource = new MMFile('FileResource');
  $mFileConcept = new MMFile('FileConcept');

  $mmDB = new MMDB();

  echo $mmDB->getDate();
  echo $mmDB->getConnStatus();
  // --------------------------------------------//

?>
