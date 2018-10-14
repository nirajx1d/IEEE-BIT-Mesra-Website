<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$to = 'contact@ieeebitmesra.in';
$subject = 'IEEE Contact Form Response';
$message = $_POST['message'];
$body='<html>
            <body>
	            <h2>Message - ieeebitmesra.in</h2>
                    <hr>
                        <p><b>Name :</b> <br>'.$name.'</p>
                        <p><b>Email : </b><br>'.$email.'</p>
                        <p><b>Phone : </b><br>'.$phone.'</p>
                        <p><b>Message : </b><br>'.$message.'</p>
            </body>
        </html>';
$headers="From: ".$name." <".$email.">\r\n";
$headers.="Reply-To :".$email."\r\n";
$headers.="MIME-Version: 1.0\r\n";
$headers.="Content-type: text/html; charset=utf-8";
mail($to, $subject, $body, $headers);
?>