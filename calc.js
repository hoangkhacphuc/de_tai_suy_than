var sex = 0;
var creatinine = 0;
var da = 0;

function changeSex1()
 {
    document.getElementById("lv1").style = "display: none;";
    document.getElementById("lv2").style = "display: none;";
    document.getElementById("lv3").style = "display: none;";
    sex = 1;
    document.getElementById("female").style = "border-left: none !important;";
    document.getElementById("male").style= "border: 1px solid #1bb193 !important; background-color: #1bb193 !important; color: white;";
 }

 function changeSex2()
 {
    document.getElementById("lv1").style = "display: none;";
    document.getElementById("lv2").style = "display: none;";
    document.getElementById("lv3").style = "display: none;";
    sex = 2;
    document.getElementById("male").style = "";
    document.getElementById("female").style= "border: 1px solid #1bb193 !important; background-color: #1bb193 !important; color: white;";
 }

 function changeDa1()
 {
    document.getElementById("lv1").style = "display: none;";
    document.getElementById("lv2").style = "display: none;";
    document.getElementById("lv3").style = "display: none;";
    da = 1;
    document.getElementById("daden").style = "border-left: none !important;";
    document.getElementById("damau").style= "border: 1px solid #1bb193 !important; background-color: #1bb193 !important; color: white;";
 }

 function changeDa2()
 {
    document.getElementById("lv1").style = "display: none;";
    document.getElementById("lv2").style = "display: none;";
    document.getElementById("lv3").style = "display: none;";
    da = 2;
    document.getElementById("damau").style = "";
    document.getElementById("daden").style= "border: 1px solid #1bb193 !important; background-color: #1bb193 !important; color: white;";
 }

 var type = 0;

 function changeType()
 {
    document.getElementById("lv1").style = "display: none;";
    document.getElementById("lv2").style = "display: none;";
    document.getElementById("lv3").style = "display: none;";
    type = !type;
    var inp_type = document.getElementById("inp_type").value;
    if (type)
    {
        if (inp_type != 0) document.getElementById("inp_type").value = (inp_type / 88.4).toFixed(2);
        document.getElementById("inp_type").placeholder = "Norm : 0.7 - 1.3";
        document.getElementById("inp_type").style = "width: calc(100% - 92.42px)";
        document.getElementById("type").style = "cursor: pointer; border: 1px solid rgb(161, 161, 161) !important;";
        document.getElementById("type").innerHTML = "mg/dL &nbsp;&nbsp;<i style='color: rgb(27, 177, 147)' class='fa fa-exchange'></i>";
    }
    else
    {
        if (inp_type != 0) document.getElementById("inp_type").value = (inp_type * 88.4).toFixed(2);
        document.getElementById("inp_type").placeholder = "Norm : 62 - 115";
        document.getElementById("inp_type").style = "width: calc(100% - 96.23px)";
        document.getElementById("type").style = "cursor: pointer; border: 1px solid rgb(161, 161, 161) !important;";
        document.getElementById("type").innerHTML = "μmol/L &nbsp;&nbsp;<i style='color: rgb(27, 177, 147)' class='fa fa-exchange'></i>";
    }
    onchangeType();
 }

 var check = 0;

 function calculate()
 {
    check = 0;
    var age = document.getElementById("inp_age").value;
    var weight = document.getElementById("inp_weight").value;
    var inp_type = document.getElementById("inp_type").value;
    if (age == "")
    {
        check = 1;
        document.getElementById("sp_age").style = "border: 1px solid red !important; border-left: 1px solid rgb(161, 161, 161) !important;";
        document.getElementById("inp_age").style = "border: 1px solid red !important; border-right: none !important; width: calc(100% - 51.72px);";
    }
    if (weight == "")
    {
        check = 1;
        document.getElementById("sp_weight").style = "border: 1px solid red !important; border-left: 1px solid rgb(161, 161, 161) !important;";
        document.getElementById("inp_weight").style = "border: 1px solid red !important; border-right: none !important; width: calc(100% - 39.64px)";
    }
    if (sex == 0)
    {
        check = 1;
        document.getElementById("male").style = "border: 1px solid red !important; border-right: 1px solid rgb(161, 161, 161) !important;";
        document.getElementById("female").style = "border: 1px solid red !important; border-left: none !important;";
    }
    if (da == 0)
    {
        check = 1;
        document.getElementById("damau").style = "border: 1px solid red !important; border-right: 1px solid rgb(161, 161, 161) !important;";
        document.getElementById("daden").style = "border: 1px solid red !important; border-left: none !important;";
    }
    if (type == 0 && inp_type == "")
    {
        check = 1;
        document.getElementById("type").style = "border: 1px solid red !important; border-left: 1px solid rgb(161, 161, 161) !important;";
        document.getElementById("inp_type").style = "border: 1px solid red !important; border-right: none !important; width: calc(100% - 96.23px);";
    }
    if (type == 1 && inp_type == "")
    {
        check = 1;
        document.getElementById("type").style = "border: 1px solid red !important; border-left: 1px solid rgb(161, 161, 161) !important;";
        document.getElementById("inp_type").style = "border: 1px solid red !important; border-right: none !important; width: calc(100% - 92.42px);";
    }
    if (check)
        return;
    var k = 0.85;
    var cre = 0.814;
    if (type)
        cre = 72;
    if (sex)
        k = 1;
    if (da)
        creatinine = (((140-age)*weight*k)/(cre*inp_type)).toFixed(2);
    else
    {
        
    }
    document.getElementById("result").innerHTML = "Kết quả : "+creatinine+" mL/min";
    if (creatinine >= 90)
        document.getElementById("level").innerHTML = "Chúc mừng bạn, bạn có chức năng thận bình thường.";
    if (creatinine >= 60 && creatinine < 90)
        document.getElementById("level").innerHTML = "Theo phân loại quốc tế về chức năng thận, bạn thuộc nhóm giảm chức năng thận nhẹ (mức độ II).<br>Không cần chỉnh liều với hầu hết các thuốc.";
    if (creatinine >= 45 && creatinine < 60)
        document.getElementById("level").innerHTML = "Theo phân loại quốc tế về chức năng thận, bạn thuộc nhóm giảm chức năng thận trung bình (mức độ IIIa).<br>Không cần chỉnh liều với phần lớn thuốc.";
    if (creatinine >= 30 && creatinine < 45)
        document.getElementById("level").innerHTML = "Theo phân loại quốc tế về chức năng thận, bạn thuộc nhóm giảm chức năng thận trung bình (độ IIIb).<br>Không cần chỉnh liều với phần lớn thuốc.";
    if (creatinine >= 15 && creatinine < 30)
        document.getElementById("level").innerHTML = "Theo phân loại quốc tế về chức năng thận, bạn thuộc nhóm giảm chức năng thận nặng (mức độ IV).<br>Bạn cần lưu ý chỉnh liều một số loại thuốc.";
    if (creatinine < 15)
        document.getElementById("level").innerHTML = "Theo phân loại quốc tế về chức năng thận, bạn thuộc nhóm giảm suy thận nặng (mức độ V).<br>Bạn cần lưu ý chỉnh liều một số loại thuốc.";
    document.getElementById("lv1").style = "";
 }

function onchangeAge()
{
    document.getElementById("lv1").style = "display: none;";
    document.getElementById("lv2").style = "display: none;";
    document.getElementById("lv3").style = "display: none;";
    var age = document.getElementById("inp_age").value;
    if (age == "" || isNaN(age) || age > 100 || age <= 0)
    {
        document.getElementById("sp_age").style = "border: 1px solid red !important; border-left: 1px solid rgb(161, 161, 161) !important;";
        document.getElementById("inp_age").style = "border: 1px solid red !important; border-right: none !important; width: calc(100% - 54px);";
        return;
    }
    document.getElementById("sp_age").style = "";
    document.getElementById("inp_age").style = "width: calc(100% - 54px)";
}

function onchangeWeight()
{
    document.getElementById("lv1").style = "display: none;";
    document.getElementById("lv2").style = "display: none;";
    document.getElementById("lv3").style = "display: none;";
    var weight = document.getElementById("inp_weight").value;
    if (weight == "" || isNaN(weight) || weight > 250 || weight < 18)
    {
        document.getElementById("sp_weight").style = "border: 1px solid red !important; border-left: 1px solid rgb(161, 161, 161) !important;";
        document.getElementById("inp_weight").style = "border: 1px solid red !important; border-right: none !important; width: calc(100% - 39.64px);";
        return;
    }
    document.getElementById("sp_weight").style = "";
    document.getElementById("inp_weight").style = "width: calc(100% - 39.64px)";
}

function onchangeType()
{
    document.getElementById("lv1").style = "display: none;";
    document.getElementById("lv2").style = "display: none;";
    document.getElementById("lv3").style = "display: none;";
    var inp_type = document.getElementById("inp_type").value;
    
    if (inp_type == "" || isNaN(inp_type) || inp_type <= 0)
    {
        document.getElementById("type").style = "cursor: pointer; border: 1px solid red !important; border-left: 1px solid rgb(161, 161, 161) !important;";
        if (type)
            document.getElementById("inp_type").style = "border: 1px solid red !important; border-right: none !important; width: calc(100% - 92.42px);";
        else document.getElementById("inp_type").style = "border: 1px solid red !important; border-right: none !important; width: calc(100% - 96.23px);";
        return;
    }
    if ((type==0 && inp_type > 884) ||  (type==1 && inp_type > 10))
    {
        document.getElementById("type").style = "cursor: pointer; border: 1px solid red !important; border-left: 1px solid rgb(161, 161, 161) !important;";
        if (type)
            document.getElementById("inp_type").style = "border: 1px solid red !important; border-right: none !important; width: calc(100% - 92.42px);";
        else document.getElementById("inp_type").style = "border: 1px solid red !important; border-right: none !important; width: calc(100% - 96.23px);";
        return;
    }
    document.getElementById("type").style = "";
    if (type)
        document.getElementById("inp_type").style = "width: calc(100% - 92.42px)";
    else document.getElementById("inp_type").style = "width: calc(100% - 96.23px)";
}

var online = 1;

function Online()
{
    online = 1;
    alert("Connected to the network. Crcl Calculator will continue to work as before!");
}

function Offline()
{
    online = 0;
    alert("Disconnected from the network. The Crcl Calculator still calculates but is unable to show the drugs !");
}

function SearchData()
{
    if (!online)
    {
        alert("Please connect to the internet and try again !");
        return;
    }
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (http.responseText.indexOf("|") == -1)
            {
                alert(http.responseText);
                document.getElementById("lv3").style = "";
            }
            else
            {
                setData(http.responseText);
                document.getElementById("lv3").style = "display: none;";
            }
        };}
    http.open("POST", "search.php");
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    http.send("creatinine="+creatinine);
}

var medicine = [];
var ratio = [];
var rm = [];
var len = 0;
var listmedi = []

function setData(str)
{
    var array = str.split("\n");
    len = array.length - 1;
    for (i=0;i < len;i++)
    {
        var array2 = array[i].split("|");
        medicine[i] = array2[0];
        ratio[i] = array2[1];
        rm[i] = array2[2];
    }
    listmedi = deduplicate(medicine);
    printData();
    getSelect();
}

function printData()
{
    var str = "<table><tr><th>Medicine</th><th>Ratio</th><th>Reference material</th></tr>";
    for (i=0;i<len;i++)
    {
        str += "<tr><td>"+medicine[i]+"</td><td>"+ratio[i]+"</td><td>"+rm[i]+"</td></tr>";
    }
    str += "</table>";
    document.getElementById("listM").innerHTML = str;
    document.getElementById("lv2").style = "";
}

function deduplicate(arr) { // Lọc phần tử trùng lặp
    let isExist = (arr, x) => {
      for(let i = 0; i < arr.length; i++) {
        if (arr[i] === x) return true;
      }
      return false;
    }
  
    let ans = [];
    arr.forEach(element => {
      if(!isExist(ans, element)) ans.push(element);
    });
    return ans;
}

function getSelect()
{
    var str = "<option value='All drugs'>All drugs</option>";
    for (i=0;i<listmedi.length;i++)
    {
        str += "<option value='"+listmedi[i]+"'>"+listmedi[i]+"</option>";
    }
    document.getElementById("medicineSelect").innerHTML = str;
}

function onchangeSelect()
{
    if (listmedi.length == 0)
        return;
    var val = document.getElementById("medicineSelect").value;

    var str = "<table><tr><th>Medicine</th><th>Ratio</th><th>Reference material</th></tr>";
    for (i=0;i<len;i++)
    {
        if (medicine[i] == val || val == "All drugs")
            str += "<tr><td>"+medicine[i]+"</td><td>"+ratio[i]+"</td><td>"+rm[i]+"</td></tr>";
    }
    str += "</table>";
    document.getElementById("listM").innerHTML = str;
}

function searchName()
{
    var val = document.getElementById("medicineName").value.toLowerCase();

    var str = "<table><tr><th>Medicine</th><th>Ratio</th><th>Reference material</th></tr>";
    var s = str;

    for (i=0;i<len;i++)
    {
        if (medicine[i].toLowerCase().indexOf(val) != -1)
            str += "<tr><td>"+medicine[i]+"</td><td>"+ratio[i]+"</td><td>"+rm[i]+"</td></tr>";
    }
    if (str == s)
        str += "<tr><td></td><td></td><td></td></tr>";
    str += "</table>";

    document.getElementById("listM").innerHTML = str;
}
