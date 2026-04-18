<?php
    require_once(__DIR__ . '/../cors.php');
    header('Content-Type: application/json');
   
    $id = $_GET['id'] ?? null;
    if (!$id) {
        echo json_encode(null);
        exit;
    }

    /* OLD SQLITE CODE
    $dbFile = __DIR__ . '/../data/showcase.db';
    $db = new SQLite3($dbFile);
    

    $query = $db->prepare('SELECT * FROM projects WHERE id = :id');
    $query->bindValue(':id', $id);
    $result = $query->execute()->fetchArray();

    if ($result) {
        $result['tags'] = !empty($result['tags']) ? explode(',', $result['tags']) : [];
        echo json_encode($result);
    } else {
        echo json_encode(['error' => 'Project not found']);
    }
    */

    // NEW STATIC JSON CODE
    $jsonFile = __DIR__ . '/../data/projects.json';
    $projects = json_decode(file_get_contents($jsonFile), true) ?? [];
    
    $result = null;
    foreach ($projects as $project) {
        if ($project['id'] == $id) {
            $result = $project;
            break;
        }
    }

    if ($result) {
        echo json_encode($result);
    } else {
        echo json_encode(['error' => 'Project not found']);
    }
?>