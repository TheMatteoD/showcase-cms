<?php
    require_once(__DIR__ . '/../cors.php');
    header('Content-Type: application/json');

    $dbFile = __DIR__ . '/../data/showcase.db';
    $db = new SQLite3($dbFile);

    $query = "SELECT * FROM projects";
    $results = $db->query($query);
    
    $projects = [];
    while ($row = $results->fetchArray()) {
        $row['tags'] = !empty($row['tags']) ? explode(',', $row['tags']) : [];
        $projects[] = $row;
    }

    echo json_encode($projects);
?>