<?php
    require_once(__DIR__ . '/../cors.php');
    header('Content-Type: application/json');

    /* OLD SQLITE CODE
    $dbFile = __DIR__ . '/../data/showcase.db';
    $db = new SQLite3($dbFile);

    $query = "SELECT * FROM about_me LIMIT 1";
    $results = $db->query($query)->fetchArray();
    */

    // NEW STATIC JSON CODE
    $jsonFile = __DIR__ . '/../data/about_me.json';
    $results = json_decode(file_get_contents($jsonFile), true);

    echo json_encode($results);
?>