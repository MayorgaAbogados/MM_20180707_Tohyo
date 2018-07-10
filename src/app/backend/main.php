<?php

  // ----------------------------------------------//
  // ----- Backend Script for MM Tohyo Forms ------//
  // ----------------------------------------------//

  include('./header.php');
  include('./settings.php');
  include('./class/mmfile.php');
  include('./class/mmform.php');
  include('./class/mmdb.php');

  $keys = array(
    'name',
    'email',
    'idNumber',
    'idType',
    'professionalCard',
    'cellphone',
    'city',
    'address',
    'phone',
    'undergraduateInstitution',
    'undergraduateYear',
    'graduateInstitution',
    'graduateYear',
    'area'
  );
  $mmForm = new MMForm($keys);

  $mFileProposal = new MMFile('FileProposal');
  $mFileResource = new MMFile('FileResource');
  $mFileConcept = new MMFile('FileConcept');

  $mmDB = new MMDB();

  if(!$mmDB->getConnStatus()){
    echo $mmDB.appendForm($mmForm);
  }else{
    echo $mmDB->getConnStatus();
  }
  // --------------------------------------------//

?>
