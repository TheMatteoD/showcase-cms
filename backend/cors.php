<?php
    require_once __DIR__ . '/vendor/autoload.php';

    if (file_exists(__DIR__ . '/.env')) {
        $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
        $dotenv->load();

        if ($_ENV['APP_ENV'] === 'development') {
            $origin = $_ENV['ALLOWED_ORIGINS'] ?? '';
            header("Access-Control-Allow-Origin: $origin");
        }
    }
?>