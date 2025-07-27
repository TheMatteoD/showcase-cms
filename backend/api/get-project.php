<?php
    require_once('../cors.php');
    header('Content-Type: application/json');
   
    $id = $_GET['id'] ?? null;
    if (!$id) {
        echo json_encode(null);
        exit;
    }

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
?>