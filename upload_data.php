<?php
    include "conn.php";
    if (isset($_POST['name']))
    {
        $name = $_POST['name'];
        $f = $_POST['from'];
        $t = $_POST['to'];
        $ratio = $_POST['ratio'];
        $refer = $_POST['refer'];
        if ($name == "" || $f == "" || $t == "")
        {
            echo "Error";
        }
        else
        {
            $noidung = "INSERT INTO medicine VALUES ('$name','$f','$t','$ratio','$refer')";
            $result = mysqli_query($conn, $noidung);
            if ($result)
                echo "Done";
            else
                echo "Error";
        }
    }
?>