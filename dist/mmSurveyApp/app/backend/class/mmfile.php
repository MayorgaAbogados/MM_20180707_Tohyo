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
    mkdir($filesPath);
    mkdir($filesPath."/".$this->folder);


    if(is_uploaded_file($temp)) {
      $newPath = $filesPath."/".$this->folder."/".$category."_". $name;
      echo $newPath;
      if(move_uploaded_file($temp, $newPath)) {
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
