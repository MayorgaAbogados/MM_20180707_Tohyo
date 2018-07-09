<?php 

$data = print_r($_POST);
header('Content-Type: application/json');
echo json_encode($data);

?>