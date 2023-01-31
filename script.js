
function get_result() {
    var wMark = document.getElementById("wMark").value;
    if (wMark > 60) {
        alert("Wrong input. Written Value must be 0-60");
    }
    var mcqMark = document.getElementById("mcqMark").value;
    if (mcqMark > 40) {
        alert("Wrong input. MCQ Value must be 0-40");
    }
    // if (wMark == "" && mcqMark == "") {
    //     alert("Please Enter First Number");
    // }

    var total = parseInt(wMark) + parseInt(mcqMark);

    if (total > 100) {
        alert("Wrong input");
    } else if (total >= 80 && total <= 100) {
        document.getElementById("total").value = total;
        document.getElementById("letterGrade").value = "A+";
        document.getElementById("gradePoint").value = "5.00";
    } else if (total >= 70 && total <= 79) {
        document.getElementById("total").value = total;
        document.getElementById("letterGrade").value = "A";
        document.getElementById("gradePoint").value = "4.00";
    } else if (total >= 60 && total <= 69) {
        document.getElementById("total").value = total;
        document.getElementById("letterGrade").value = "A-";
        document.getElementById("gradePoint").value = "3.50";
    } else if (total >= 50 && total <= 59) {
        document.getElementById("total").value = total;
        document.getElementById("letterGrade").value = "B";
        document.getElementById("gradePoint").value = "3.00";
    } else if (total >= 40 && total <= 49) {
        document.getElementById("total").value = total;
        document.getElementById("letterGrade").value = "C";
        document.getElementById("gradePoint").value = "2.00";
    } else if (total >= 33 && total <= 39) {
        document.getElementById("total").value = total;
        document.getElementById("letterGrade").value = "D";
        document.getElementById("gradePoint").value = "1.00";
    } else if (total >= 0 && total <= 32) {
        document.getElementById("total").value = total;
        document.getElementById("letterGrade").value = "F";
        document.getElementById("gradePoint").value = "0.00";
    } else {
        document.getElementById("total").value = "";
        document.getElementById("letterGrade").value = "";
        document.getElementById("gradePoint").value = "";
    }
}
get_result();

function get_result2() {
    var wMark = document.getElementById("wMark2").value;
    if (wMark > 60) {
        alert("Wrong input. Written Value must be 0-60");
    }
    var mcqMark = document.getElementById("mcqMark2").value;
    if (mcqMark > 40) {
        alert("Wrong input. MCQ Value must be 0-40");
    }
    // if (wMark == "" || mcqMark == "") {
    //     alert("Please Enter First Number");
    // }

    var total = parseInt(wMark) + parseInt(mcqMark);

    if (total > 100) {
        alert("Wrong input");
    } else if (total >= 80 && total <= 100) {
        document.getElementById("total2").value = total;
        document.getElementById("letterGrade2").value = "A+";
        document.getElementById("gradePoint2").value = "5.00";
    } else if (total >= 70 && total <= 79) {
        document.getElementById("total2").value = total;
        document.getElementById("letterGrade2").value = "A";
        document.getElementById("gradePoint2").value = "4.00";
    } else if (total >= 60 && total <= 69) {
        document.getElementById("total2").value = total;
        document.getElementById("letterGrade2").value = "A-";
        document.getElementById("gradePoint2").value = "3.50";
    } else if (total >= 50 && total <= 59) {
        document.getElementById("total2").value = total;
        document.getElementById("letterGrade2").value = "B";
        document.getElementById("gradePoint2").value = "3.00";
    } else if (total >= 40 && total <= 49) {
        document.getElementById("total2").value = total;
        document.getElementById("letterGrade2").value = "C";
        document.getElementById("gradePoint2").value = "2.00";
    } else if (total >= 33 && total <= 39) {
        document.getElementById("total2").value = total;
        document.getElementById("letterGrade2").value = "D";
        document.getElementById("gradePoint2").value = "1.00";
    } else if (total >= 0 && total <= 32) {
        document.getElementById("total2").value = total;
        document.getElementById("letterGrade2").value = "F";
        document.getElementById("gradePoint2").value = "0.00";
    } else {
        document.getElementById("total2").value = "";
        document.getElementById("letterGrade2").value = "";
        document.getElementById("gradePoint2").value = "";
    }
}
get_result2();

function get_result3() {
    var wMark = document.getElementById("wMark3").value;
    if (wMark > 60) {
        alert("Wrong input. Written Value must be 0-60");
    }
    var mcqMark = document.getElementById("mcqMark3").value;
    if (mcqMark > 40) {
        alert("Wrong input. MCQ Value must be 0-40");
    }
    // if (wMark == "" || mcqMark == "") {
    //     alert("Please Enter First Number");
    // }

    var total = parseInt(wMark) + parseInt(mcqMark);

    if (total > 100) {
        alert("Wrong input");
    } else if (total >= 80 && total <= 100) {
        document.getElementById("total3").value = total;
        document.getElementById("letterGrade3").value = "A+";
        document.getElementById("gradePoint3").value = "5.00";
    } else if (total >= 70 && total <= 79) {
        document.getElementById("total3").value = total;
        document.getElementById("letterGrade3").value = "A";
        document.getElementById("gradePoint3").value = "4.00";
    } else if (total >= 60 && total <= 69) {
        document.getElementById("total3").value = total;
        document.getElementById("letterGrade3").value = "A-";
        document.getElementById("gradePoint3").value = "3.50";
    } else if (total >= 50 && total <= 59) {
        document.getElementById("total3").value = total;
        document.getElementById("letterGrade3").value = "B";
        document.getElementById("gradePoint3").value = "3.00";
    } else if (total >= 40 && total <= 49) {
        document.getElementById("total3").value = total;
        document.getElementById("letterGrade3").value = "C";
        document.getElementById("gradePoint3").value = "2.00";
    } else if (total >= 33 && total <= 39) {
        document.getElementById("total3").value = total;
        document.getElementById("letterGrade3").value = "D";
        document.getElementById("gradePoint3").value = "1.00";
    } else if (total >= 0 && total <= 32) {
        document.getElementById("total3").value = total;
        document.getElementById("letterGrade3").value = "F";
        document.getElementById("gradePoint3").value = "0.00";
    } else {
        document.getElementById("total3").value = "";
        document.getElementById("letterGrade3").value = "";
        document.getElementById("gradePoint3").value = "";
    }
}
get_result3();

function get_result4() {
    var wMark = document.getElementById("wMark4").value;
    if (wMark > 60) {
        alert("Wrong input. Written Value must be 0-60");
    }
    var mcqMark = document.getElementById("mcqMark4").value;
    if (mcqMark > 40) {
        alert("Wrong input. MCQ Value must be 0-40");
    }
    // if (wMark == "" || mcqMark == "") {
    //     alert("Please Enter First Number");
    // }

    var total = parseInt(wMark) + parseInt(mcqMark);

    if (total > 100) {
        alert("Wrong input");
    } else if (total >= 80 && total <= 100) {
        document.getElementById("total4").value = total;
        document.getElementById("letterGrade4").value = "A+";
        document.getElementById("gradePoint4").value = "5.00";
    } else if (total >= 70 && total <= 79) {
        document.getElementById("total4").value = total;
        document.getElementById("letterGrade4").value = "A";
        document.getElementById("gradePoint4").value = "4.00";
    } else if (total >= 60 && total <= 69) {
        document.getElementById("total4").value = total;
        document.getElementById("letterGrade4").value = "A-";
        document.getElementById("gradePoint4").value = "3.50";
    } else if (total >= 50 && total <= 59) {
        document.getElementById("total4").value = total;
        document.getElementById("letterGrade4").value = "B";
        document.getElementById("gradePoint4").value = "3.00";
    } else if (total >= 40 && total <= 49) {
        document.getElementById("total4").value = total;
        document.getElementById("letterGrade4").value = "C";
        document.getElementById("gradePoint4").value = "2.00";
    } else if (total >= 33 && total <= 39) {
        document.getElementById("total4").value = total;
        document.getElementById("letterGrade4").value = "D";
        document.getElementById("gradePoint4").value = "1.00";
    } else if (total >= 0 && total <= 32) {
        document.getElementById("total4").value = total;
        document.getElementById("letterGrade4").value = "F";
        document.getElementById("gradePoint4").value = "0.00";
    } else {
        document.getElementById("total4").value = "";
        document.getElementById("letterGrade4").value = "";
        document.getElementById("gradePoint4").value = "";
    }
}
get_result4();

