<?php
class MMFile{

  private $name;
  private $type;
  private $error;
  private $temp;

  private $user;
  private $folder;
  private $date;

  public $FileName;

  function MMFile($queryName,$category){
    $iFile = $_FILES[$queryName];
    $name = $iFile['name'];
    $type = $iFile['type'];
    $error = $iFile['error'];
    $temp = $iFile['tmp_name'];

    $filesPath = "./files";

    $this->folder = $_POST['idNumber']."_".$name;
    mkdir($this->folder);
    mkdir($filesPath);

    if(is_uploaded_file($temp)) {
      if(move_uploaded_file($temp, $filesPath . $this->folder."/".$category. $name)) {
          echo "Sussecfully uploaded your image.";
      }
      else {
          echo "Failed to move your image.";
      }
    }
    else {
     echo "Failed to upload your image.";
    }


  }
}
?>
