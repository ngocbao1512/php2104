/* <!-- sử dụng mảng object để lưu thông tin học viên và sử dụng vòng lặp để in thông tin ra theo bảng bằng  html  --> */

/* tao array object data student */
// var result = (x == 0) ? 'abc' : 'xxx';
var studentList = [
    [1, 'bao', 'php2104', 8, "nam"],
    [2, 'an', 'php2104', 9, "nu"],
    [3, 'minh', 'php2104', 3, "nam"],
    [4, 'hieu', 'php2104', 4, "nam"],
    [5, 'ha', 'php2104', 7, "nam"],
    [6, 'hang', 'php2104', 8, "nam"],
    [7, 'nam', 'php2104', 4, "nam"],
    [8, 'ngoc', 'php2104', 2, "nam"],
];

/* ================================================================== */
/* ============================FUNCTION============================= */
/* ================================================================ */
/*  in bang  */
function tableofallstudent() {
    var i = 0;
    var text2 = "";
    for (i = 0; i < studentList.length; i++) {
        text2 += "<tr>"
            + "<td>" + studentList[i][0] + "</td>"
            + "<td>" + studentList[i][1] + "</td>"
            + "<td>" + studentList[i][2] + "</td>"
            + "<td>" + studentList[i][3] + "</td>"
            + "<td>" + studentList[i][4] + "</td>"
            + "</tr>"
    }
    text = "<table>"
        + "<tr>"
        + "<td>stt</td>"
        + "<td>name</td>"
        + "<td>class</td>"
        + "<td>point</td>"
        + "<td>sex</td>"

        + "</tr>"
        + text2
        + "</table>";
    /* đổ data vào id = "tableofallstudent" */
    document.getElementById("tableofallstudent").innerHTML = text;
}

/* ====================== */
/*  --------SORT-------  */
/* ==================== */

/*  sort by point */
function sortByPoint() {
    var temp = studentList[1];
    for (var i = 0; i < studentList.length; i++) {
        for (var j = i; j <= studentList.length - 1; j++) {
            if (studentList[i][3] > studentList[j][3]) {
                temp = studentList[i];
                studentList[i] = studentList[j];
                studentList[j] = temp;
            }
        }
    }
    tableofallstudent();
}

/* sort by name ABC */
function sortByName() {
    var temp = studentList[1];
    for (var i = 0; i < studentList.length; i++) {
        for (var j = i; j <= studentList.length - 1; j++) {
            if (studentList[i][1] > studentList[j][1]) {
                temp = studentList[i];
                studentList[i] = studentList[j];
                studentList[j] = temp;
            }
        }
    }
    tableofallstudent();
}
/* reset */
function reset() {
    var temp = studentList[1];
    for (var i = 0; i < studentList.length; i++) {
        for (var j = i; j <= studentList.length - 1; j++) {
            if (studentList[i][0] > studentList[j][0]) {
                temp = studentList[i];
                studentList[i] = studentList[j];
                studentList[j] = temp;
            }
        }
    }
    tableofallstudent();
}

/* ========================= */
/* =========STATISTIC====== */
/* ======================= */

/* point bigger than eight */
function pointBiggerEight() {
    var i = 0;
    var text2 = "";
    for (i = 0; i < studentList.length; i++) {
        if (studentList[i][3] >= 8) {
            text2 += "<tr>"
                + "<td>" + studentList[i][0] + "</td>"
                + "<td>" + studentList[i][1] + "</td>"
                + "<td>" + studentList[i][2] + "</td>"
                + "<td>" + studentList[i][3] + "</td>"
                + "<td>" + studentList[i][4] + "</td>"
                + "</tr>"
        }
    }
    text = "<table>"
        + "<tr>"
        + "<td>stt</td>"
        + "<td>name</td>"
        + "<td>class</td>"
        + "<td>point</td>"
        + "<td>sex</td>"

        + "</tr>"
        + text2
        + "</table>";
    /* đổ data vào id = "tableofallstudent" */
    document.getElementById("statisticstudentintable").innerHTML = text;

}

/* sex is 'nam' */
function SexIsNam() {
    var i = 0;
    var text2 = "";
    for (i = 0; i < studentList.length; i++) {
        if (studentList[i][4] == 'nam') {
            text2 += "<tr>"
                + "<td>" + studentList[i][0] + "</td>"
                + "<td>" + studentList[i][1] + "</td>"
                + "<td>" + studentList[i][2] + "</td>"
                + "<td>" + studentList[i][3] + "</td>"
                + "<td>" + studentList[i][4] + "</td>"
                + "</tr>"
        }
    }
    text = "<table>"
        + "<tr>"
        + "<td>stt</td>"
        + "<td>name</td>"
        + "<td>class</td>"
        + "<td>point</td>"
        + "<td>sex</td>"

        + "</tr>"
        + text2
        + "</table>";
    /* đổ data vào id = "tableofallstudent" */
    document.getElementById("statisticstudentintable").innerHTML = text;

}

/* sex is 'nu' */
function SexIsNu() {
    var i = 0;
    var text2 = "";
    for (i = 0; i < studentList.length; i++) {
        if (studentList[i][4] == 'nu') {
            text2 += "<tr>"
                + "<td>" + studentList[i][0] + "</td>"
                + "<td>" + studentList[i][1] + "</td>"
                + "<td>" + studentList[i][2] + "</td>"
                + "<td>" + studentList[i][3] + "</td>"
                + "<td>" + studentList[i][4] + "</td>"
                + "</tr>"
        }
    }
    text = "<table>"
        + "<tr>"
        + "<td>stt</td>"
        + "<td>name</td>"
        + "<td>class</td>"
        + "<td>point</td>"
        + "<td>sex</td>"

        + "</tr>"
        + text2
        + "</table>";
    /* đổ data vào id = "tableofallstudent" */
    document.getElementById("statisticstudentintable").innerHTML = text;

}

/* ============================ */
/* --------- SEARCH----------- */
/* ========================== */

/* lay data tu the input roi quet mang goi ham xuat data tra vao studentsearchintable  */
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var i = 0;
    var text2 = "";
    for (i = 0; i < studentList.length; i++) {
        if (studentList[i][1] == x || studentList[i][2] == x || studentList[i][3] == x || studentList[i][4] == x) {
            text2 += "<tr>"
                + "<td>" + studentList[i][0] + "</td>"
                + "<td>" + studentList[i][1] + "</td>"
                + "<td>" + studentList[i][2] + "</td>"
                + "<td>" + studentList[i][3] + "</td>"
                + "<td>" + studentList[i][4] + "</td>"
                + "</tr>"
        }
    }
    text = "<table>"
        + "<tr>"
        + "<td>stt</td>"
        + "<td>name</td>"
        + "<td>class</td>"
        + "<td>point</td>"
        + "<td>sex</td>"

        + "</tr>"
        + text2
        + "</table>";
    /* đổ data vào id = "tableofallstudent" */
    document.getElementById("studentsearchintable").innerHTML = text;
  }