<?php
    require_once('../cors.php');

    header('Content-Type: application/json');
    $data = file_get_contents('../data/projects.json');
    echo $data;
?>