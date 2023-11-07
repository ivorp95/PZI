<!-- CLI start php server: php -S localhost:2222 -->


<?php
$email=$_GET['email'];
$poruka=$_GET['poruka'];
echo"<h1>Pozdrav ja sam PHP server!".$email. "<!h1>";
echo"<h1>Poruka:".$poruka. "<!h1>";
?>