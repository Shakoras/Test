<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Headers: Content-Type');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Content-Type: application/x-www-form-urlencoded");

include "../classes/db.php";
include "../classes/coachInscription.php";