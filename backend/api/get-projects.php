<?php
    require_once(__DIR__ . '/../cors.php');
    header('Content-Type: application/json');

    /* OLD SQLITE CODE
    $dbFile = __DIR__ . '/../data/showcase.db';
    $db = new SQLite3($dbFile);

    $query = "SELECT * FROM projects";
    $results = $db->query($query);
    
    $projects = [];
    while ($row = $results->fetchArray()) {
        $row['tags'] = !empty($row['tags']) ? explode(',', $row['tags']) : [];
        $projects[] = $row;
    }
    */

    // NEW STATIC JSON CODE
    $jsonFile = __DIR__ . '/../data/projects.json';
    $projects = json_decode(file_get_contents($jsonFile), true) ?? [];

    echo json_encode($projects);
?>