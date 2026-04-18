<?php
    // Load local .env if it physically exists (for local development)
    if (file_exists(__DIR__ . '/vendor/autoload.php') && file_exists(__DIR__ . '/.env')) {
        require_once __DIR__ . '/vendor/autoload.php';
        $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
        $dotenv->load();
    }

    // Read ALLOWED_ORIGINS and split by comma into an array, trimming whitespace
    $envOrigins = $_ENV['ALLOWED_ORIGINS'] ?? getenv('ALLOWED_ORIGINS') ?? '';
    $allowedOriginsArray = array_map('trim', explode(',', $envOrigins));

    // Get the incoming request's Origin, if any
    $requestOrigin = $_SERVER['HTTP_ORIGIN'] ?? '';

    // If the request origin matches one of our allowed domains, grant exactly that origin
    if (in_array($requestOrigin, $allowedOriginsArray)) {
        header("Access-Control-Allow-Origin: $requestOrigin");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
    }

    // Handle preflight OPTIONS requests gracefully
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        exit(0);
    }
?>