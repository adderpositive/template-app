<?php

require __DIR__ . '/../../vendor/autoload.php';
require __DIR__ . './config/config.php';

// TODO: add to config
date_default_timezone_set('Europe/Prague');

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

// create app
$app = new \Slim\App(['settings' => ['displayErrorDetails' => true]]); // TODO: add to config

// get container
$container = $app->getContainer();

// register component on container
$container['view'] = function ($container) {
    return new \Slim\Views\PhpRenderer(__DIR__ . '/templates/');
};

// render PHP template in route
$app->get('/', function ($request, $response, $args) {
    $this->view->render($response, 'index.html');
});

// run app
$app->run();