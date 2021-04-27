<?php
    include "conn.php";
    if (isset($_POST['creatinine']))
    {
        $creatinine = $_POST['creatinine'];
        if (KyTuDacBiet($creatinine))
        {
            echo "Do not enter special characters !";
            return;
        }
        if (ctype_digit($creatinine))
        {
            echo "Just enter the number !";
            return;
        }
        if ($creatinine > 122000)
        {
            echo "The number is too large !";
            return;
        }
        $noidung = "SELECT * FROM medicine WHERE F <= ROUND(".$creatinine.",2) AND ROUND(".$creatinine.",2) <= T";
        $result = mysqli_query($conn, $noidung);
        $k = mysqli_fetch_row($result);
        if ($k == 0)
            echo "No data available !";
        else
        {
            while ($row=$k)
            {
                echo $row[0]."|".$row[3]."|".$row[4]."\n";
                $k = mysqli_fetch_row($result);
            }
        }
    }
    function KyTuDacBiet($str)
    {
        return preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $str);
    }
?>