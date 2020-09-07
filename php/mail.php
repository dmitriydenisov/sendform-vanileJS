<?php

$name = htmlspecialchars(trim($_POST["name"]));
$email = htmlspecialchars(trim($_POST["email"]));
$phone = htmlspecialchars(trim($_POST["phone"]));
$comments = htmlspecialchars(trim($_POST["message"]));

$to = "dmitriyd2009@yandex.ru";
$subject = "Новая заявка с сайта";
$message =
    '
<strong>Имя:</strong> '.$name.'<br>
<strong>Email:</strong> '.$email.'<br>  
<strong>Телефон:</strong> '.$phone.'<br>
<strong>Сообщение:</strong> <br>'.$comments.'  
';


$headers =
           'From: Новая заявка с сайта' . "\r\n" . 
           'Reply-To: dmitriyd2009@yandex.ru' . "\r\n" .
           'Content-Type: text/html; charset=utf-8' . "\r\n" . 
           'Content-Transfer-Encoding: 8bit' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

?>
