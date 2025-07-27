<?php
    require_once('../cors.php');

    header('Content-Type: application/json');
    $id = $_GET['id'] ?? null;
    if (!$id) {
        echo json_encode(null);
        exit;
    }

    $data = json_decode(file_get_contents('../data/projects.json'), true);

    foreach ($data as $project) {
        if ($project['id'] === $id) {
            echo json_encode($project);
            exit;
        }
    }

    echo json_encode(null);
?>