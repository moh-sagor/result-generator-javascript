
function get_result() {
    for (var i = 1; i <= 4; i++) {
        var wMark = document.getElementById("wMark" + i).value;
        if (wMark > 60) {
            alert("Wrong input. Written Value must be 0-60");
        }
        var mcqMark = document.getElementById("mcqMark" + i).value;
        if (mcqMark > 40) {
            alert("Wrong input. MCQ Value must be 0-40");
        }

        var total = parseInt(wMark) + parseInt(mcqMark);

        if (total > 100) {
            alert("Wrong input");
        } else if (total >= 80 && total <= 100) {
            document.getElementById("total" + i).value = total;
            document.getElementById("letterGrade" + i).value = "A+";
            document.getElementById("gradePoint" + i).value = "5.00";
        } else if (total >= 70 && total <= 79) {
            document.getElementById("total" + i).value = total;
            document.getElementById("letterGrade" + i).value = "A";
            document.getElementById("gradePoint" + i).value = "4.00";
        } else if (total >= 60 && total <= 69) {
            document.getElementById("total" + i).value = total;
            document.getElementById("letterGrade" + i).value = "A-";
            document.getElementById("gradePoint" + i).value = "3.50";
        } else if (total >= 50 && total <= 59) {
            document.getElementById("total" + i).value = total;
            document.getElementById("letterGrade" + i).value = "B";
            document.getElementById("gradePoint" + i).value = "3.00";
        } else if (total >= 40 && total <= 49) {
            document.getElementById("total" + i).value = total;
            document.getElementById("letterGrade" + i).value = "C";
            document.getElementById("gradePoint" + i).value = "2.00";
        } else if (total >= 33 && total <= 39) {
            document.getElementById("total" + i).value = total;
            document.getElementById("letterGrade" + i).value = "D";
            document.getElementById("gradePoint" + i).value = "1.00";
        } else if (total >= 0 && total <= 32) {
            document.getElementById("total" + i).value = total;
            document.getElementById("letterGrade" + i).value = "F";
            document.getElementById("gradePoint" + i).value = "0.00";
        } else {
            document.getElementById("total" + i).value = "";
            document.getElementById("letterGrade" + i).value = "";
            document.getElementById("gradePoint" + i).value = "";
        }
    }

    var subtotal = parseInt(document.getElementById("gradePoint1").value) + parseInt(document.getElementById("gradePoint2").value) + parseInt(document.getElementById("gradePoint3").value) + parseInt(document.getElementById("gradePoint4").value);
    var gpa = subtotal / 4;
    document.getElementById("modal_result").innerHTML = "You got GPA : " + gpa;
}
get_result();



function calculate_age() {
    var d = document.getElementById('date').value;
    var m = document.getElementById('month').value;
    var y = document.getElementById('year').value;

    var date = new Date();
    var d1 = date.getDate();
    var m1 = 1 + date.getMonth();
    var y1 = date.getFullYear();

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d > d1) {
        d1 = d1 + month[m1 - 1];
        m1 = m1 - 1;
    }
    if (m > m1) {
        m1 = m1 + 12
        y1 = y1 - 1;
    }

    const finalDate = d1 - d;
    const finalMonth = m1 - m;
    const finalYear = y1 - y;


    document.getElementById('display_age').innerHTML = "Your Age is " + finalYear + " Year " + finalMonth + " Month "
        + finalDate + " Days"
}

