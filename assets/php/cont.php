<?php
if(isset($_POST['submit'])) {
    $to = "your-email-address@example.com"; // your email address
    $subject = "New contact form submission";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $headers = "From: " . $name . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/html\r\n";

    $body = "<h2>New contact form submission</h2>
             <p><strong>Name:</strong> {$name}</p>
             <p><strong>Email:</strong> {$email}</p>
             <p><strong>Message:</strong> {$message}</p>";

    if(mail($to, $subject, $body, $headers)) {
        echo "<p>Thank you for contacting us. We will be in touch soon.</p>";
    } else {
        echo "<p>There was an error sending your message. Please try again later.</p>";
    }
}
?>
