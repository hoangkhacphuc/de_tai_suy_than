<?php
    include "conn.php";
?>

<html>
    <head>
        <title>Clcr Calculator</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <script src="calc.js"></script>
		<link href="pngtree.png" rel="shortcut icon" />
        <link rel="stylesheet" type="text/css" href="calc.css">
        <meta name="viewport" content="width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=no">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body ondblclick="return false" ononline="Online()" onoffline="Offline()">
        <div class="body">
            <div class="title">
                Creatinine Clearance Calculator
                <span>Tính độ thanh thải Creatinine dựa trên công thức phổ biến Cockcroft-Gault và MDRD.</span>
            </div>
            <div class="inp">
                <table>
                    <tr>
                        <td>Tuổi</td>
                        <td class="in"><input type="text" onkeyup="onchangeAge()" style="width: calc(100% - 54px)" id="inp_age"><span id="sp_age">Năm</span></td>
                    </tr>
                    <tr>
                        <td>Cân nặng</td>
                        <td class="in"><input type="text" onkeyup="onchangeWeight()" style="width: calc(100% - 39.64px)" id="inp_weight"><span id="sp_weight">Kg</span></td>
                    </tr>
                    <tr>
                        <td>Giới tính</td>
                        <td class="in"><button id="male" onclick="changeSex1()">Nam</button><button id="female" onclick="changeSex2()">Nữ</button></td>
                    </tr>
                    <tr>
                        <td>Màu da</td>
                        <td class="in"><button id="damau" onclick="changeDa1()">Da màu</button><button id="daden" onclick="changeDa2()">Da đen</button></td>
                    </tr>
                    <tr>
                        <td>Creatinine</td>
                        <td class="in">
                            <input type="text" onkeyup="onchangeType()" id="inp_type" style="width: calc(100% - 96.23px)" placeholder="Norm : 62 - 115"><span style="cursor: pointer;"  onclick="changeType()" id="type">μmol/L &nbsp;&nbsp;<i style="color: rgb(27, 177, 147)" class="fa fa-exchange"></i></span>
                        </td>
                    </tr>
                </table>
            </div>

            <!-- Tính Creatinine -->
            <div class="next-calc">
                <button onclick="calculate()">Theo Cockcroft-Gault &nbsp;&nbsp;<i style="font-weight: 100;" class="fa fa-calculator"></i></button>
                <button onclick="calculate()">Theo MDRD &nbsp;&nbsp;<i style="font-weight: 100;" class="fa fa-calculator"></i></button>
            </div>
            

            <!-- Kết quả Creatinine  -->
            <div class="results" id="lv1" style="display: none;">
                <div class="title" id="result">Kết quả : 60 mL/min</div>
                <span id="level">Stage 1 kidney failure</span>
                <div class="nextstep"><button onclick="SearchData()">Tiếp tục ❯❯❯</button></div>
            </div>

            <div style="display: none;" id="lv3" class="fail"><i class="fa fa-info-circle"></i>&nbsp;&nbsp;Không có dữ liệu !</div>

            <div style="display: none;" id="lv2">
                <!-- Chọn thuốc -->
                <div class="list-medicine">
                    <!-- Tìm theo tên -->
                    <input type="text" id="medicineName" placeholder="Tên thuốc ...">
                    <button onclick="searchName()">Tìm kiếm</button>

                    <!-- Tìm theo danh sách -->
                    <select id="medicineSelect" onchange="onchangeSelect()">
                        
                    </select>

                    <!-- Kết quả tìm kiếm -->
                    <!--
                    <div class="resName" style="display: none;" id="resNameSearch">
                        <ul id="resList">
                            
                        </ul>
                    </div>
                    -->
                </div>

                <!-- Danh sách thuốc -->
                <div class="list" id="listM">
                    <table>
                        <tr>
                            <th>Thuốc</th>
                            <th>Liều lượng</th>
                            <th>Tài liệu tham khảo</th>
                        </tr>
                        <tr>
                            <td>Thuốc 1</td>
                            <td>Liều lượng 1</td>
                            <td>Sách 1</td>
                        </tr>
                        <tr>
                            <td>Thuốc 2</td>
                            <td>Liều lượng 2</td>
                            <td>Sách 2</td>
                        </tr>
                        <tr>
                            <td>Thuốc 3</td>
                            <td>Liều lượng 3</td>
                            <td>Sách 3</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </body>
</html>