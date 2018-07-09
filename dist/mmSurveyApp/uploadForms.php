<?php 
/*
$data = array("Volvo", "BMW", "Toyota");
header('Content-Type: application/json');
echo json_encode($data);
*/
echo "Recibiendo archivos";
print_r($_POST);
print_r($_FILES['FileProposal']);
print_r($_FILES['FileResource']);
print_r($_FILES['FileConcept']);
?>