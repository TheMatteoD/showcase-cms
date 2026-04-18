<?php
    // Load local .env if it physically exists (for local development)
    if (file_exists(__DIR__ . '/vendor/autoload.php') && file_exists(__DIR__ . '/.env')) {
        require_once __DIR__ . '/vendor/autoload.php';
        $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
        $dotenv->load();
    }

    // Read from the environment (captures both local .env and system variables)
    $allowedOrigin = $_ENV['ALLOWED_ORIGINS'] ?? getenv('ALLOWED_ORIGINS') ?? '';

    // If an origin is specified, set the headers
    if (!empty($allowedOrigin)) {
        header("Access-Control-Allow-Origin: $allowedOrigin");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
    }

    // Handle preflight OPTIONS requests gracefully
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        exit(0);
    }
?>