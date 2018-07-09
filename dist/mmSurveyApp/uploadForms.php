<?php 
/*
$data = array("Volvo", "BMW", "Toyota");
header('Content-Type: application/json');
echo json_encode($data);
*/
$t=time();

$name = $_POST['name'];
$email = $_POST['email'];
$idNumber = $_POST['idNumber'];
$idType = $_POST['idType'];
$professionalCard = $_POST['professionalCard'];
$cellphone = $_POST['cellphone'];
$city = $_POST['city'];
$address = $_POST['address'];
$phone = $_POST['phone'];
$undergraduateInstitution = $_POST['undergraduateInstitution'];
$undergraduateYear = $_POST['undergraduateYear'];
$graduateInstitution = $_POST['graduateInstitution'];
$graduateYear = $_POST['graduateYear'];
$area = $_POST['area'];
$FileProposal = $_FILES['FileProposal'];
$FileResource = $_FILES['FileResource'];
$FileConcept = $_FILES['FileConcept'];

$submitDate = date("Y-m-d",$t);

$FileProposalname = $FileProposal['name'];
$FileProposaltype = $FileProposal['type'];
$FileProposalerror = $FileProposal['error'];
$FileProposaltemp = $FileProposal['tmp_name'];




//The path you wish to upload the image to
$filesPath = "./files";

if(is_uploaded_file($FileProposaltemp)) {

    if(move_uploaded_file($FileProposaltemp, $filesPath . $FileProposalname)) {
        echo "Sussecfully uploaded your image.";
    }
    else {
        echo "Failed to move your image.";
    }
}
else {
    echo "Failed to upload your image.";
}

?>