<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'kh.khaliduiux@gmail.com';
$subject = 'New message from website contact form';
$body = "Name: $name\nEmail: $email\nMessage: $message";

if (mail($to, $subject, $body)) {
    echo 'Message sent successfully.';
} else {
    echo 'Message sending failed.';
}
?>
