<?php
    require_once(__DIR__ . '/../cors.php');
    header('Content-Type: application/json');

    $dbFile = __DIR__ . '/../data/showcase.db';
    $db = new SQLite3($dbFile);

    $query = "SELECT * FROM about_me LIMIT 1";
    $results = $db->query($query)->fetchArray();

    echo json_encode($results);
?>