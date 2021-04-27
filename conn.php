<?php
$host = "localhost";
$user = "de_tai_suy_than";
$pass = "Phenikaa123456a@";
$databaseName = "de_tai_suy_than";
$conn = mysqli_connect($host, $user, $pass, $databaseName);
if($conn == false)
{
    echo '<script language="javascript">';
    echo 'alert("Không thể kết nối tới server !")';
    echo '</script>';
}
?>