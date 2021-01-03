<?php
include "../config/config.php";

$_POST = json_decode(file_get_contents('php://input'), true);


$to = "mkacha51@live.fr";
$subject = "This user is asking for access as a coach, would you validate it?";
$message = "this is a message";
$headers = "From: ".$_GET['from'];
$headers .= "mailed-by: " . $_GET['from'] . "\r\n";
$headers .= "reply-to: replyto@gmail.com" . "\r\n";
$headers .= "Content-type: text/html\r\n";

if (mail($to, $subject, $message, $headers))
    echo "success";
else
    echo "error";