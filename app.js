function callYear() {
    let first = document.getElementById("firstPeriod").value;
    let second = document.getElementById("secondPeriod").value;
    let year = document.getElementById("year").value;
    let result = 0;

    if ((first == "buddha") && (second == "christ")) {
        result = year - 543;
        if (result < 0){
            result = (result * -1) + " " + "ปีก่อนคริสต์ศักราช"
        }
    }
    else if ((first == "christ") && (second == "buddha")) {
        result = year - (-543) ;
    }
    else if ((first == "buddha") && (second == "hallah")) {
        result = year - 1122;
        if (result < 0) {
            result = (result * -1) + " " + "ปีก่อนฮิจเราะห์ศักราช"
        }
    }
    else if ((first == "hallah") && (second == "buddha")) {
        result = year - (-1122);
    }
    else if ((first == "buddha") && (second == "maha")) {
        result = year - 621;
        if (result < 0) {
            result = (result * -1) + " " + "ปีก่อนมหาศักราช"
        }
    }
    else if ((first == "maha") && (second == "buddha")) {
        result = year - (-621);
    }
    else if ((first == "buddha") && (second == "jul")) {
        result = year - 1181;
        if (result < 0) {
            result = (result * -1) + " " + "ปีก่อนจุลศักราช"
        }
    }
    else if ((first == "jul") && (second == "buddha")) {
        result = year - (-1181);
    }
    else if ((first == "buddha") && (second == "rattana")) {
        result = year - 2324;
        if (result < 0) {
            result = (result * -1) + " " + "ปีก่อนรัตนโกสินทร์ศก"
        }
    }
    else if ((first == "rattana") && (second == "buddha")) {
        result = year - (-2324);
    }
    else if ((first == "christ") && (second == "hallah")) {
        result = year - 579;
        if (result < 0) {
            result = (result * -1) + " " + "ปีก่อนฮิจเราะห์ศักราช"
        }
    }
    else if ((first == "hallah") && (second == "christ")) {
        result = year - (-579);
    }
    else if ((first == "christ") && (second == "maha")) {
        result = year - 78;
        if (result < 0) {
            result = (result * -1) + " " + "ปีก่อนมหาศักราช"
        }
    }
    else if ((first == "maha") && (second == "christ")) {
        result = year - (-78);
    }
    else if ((first == "christ") && (second == "jul")) {
        result = year - 638;
        if (result < 0) {
            result = (result * -1) + " " + "ปีก่อนจุลศักราช"
        }
    }
    else if ((first == "jul") && (second == "christ")) {
        result = year - (-638);
    }
    else if ((first == "christ") && (second == "rattana")) {
        result = year - 1781;
        if (result < 0) {
            result = (result * -1) + " " + "ปีก่อนรัตนโกสินทร์ศก"
        }
    }
    else if ((first == "rattana") && (second == "christ")) {
        result = year - (-1781);
    }
    else if ((first == "hallah") && (second == "maha")) {
        result = year - (-501);
    }
    else if ((first == "maha") && (second == "hallah")) {
        result = year - 501;
        if (result < 0) {
            result = (result * -1) + " " + "ปีก่อนฮิจเราะห์ศักราช"
        }
    }
    else if ((first == "hallah") && (second == "jul")) {
        result = year - 59;
       if (result < 0) {
            result = (result * -1) + " " + "ปีก่อนจุลศักราช"
        }
    }
    else if ((first == "jul") && (second == "hallah")) {
        result = year - (-59);
    }
    else if ((first == "hallah") && (second == "rattana")) {
        result = year - 1202;
        if (result < 0) {
            result = (result * -1) + " " + "ปีก่อนรัตนโกสินทร์ศก"
        }
    }
    else if ((first == "rattana") && (second == "hallah")) {
        result = year - (-1202);
    }
    else if ((first == "maha") && (second == "jul")) {
        result = year - 560;
        if (result < 0) {
            result = (result * -1) + " " + "ปีก่อนจุลศักราช"
        }
    }
    else if ((first == "jul") && (second == "maha")) {
        result = year - (-560);
    }
    else if ((first == "maha") && (second == "rattana")) {
        result = year - 1703;
        if (result < 0) {
            result = (result * -1) + " " + "ปีก่อนรัตนโกสินทร์ศก"
        }
    }
    else if ((first == "rattana") && (second == "maha")) {
        result = year - (-1703);
    }
    else if ((first == "jul") && (second == "rattana")) {
        result = year - 1143;
        if (result < 0) {
            result = (result * -1) + " " + "ปีก่อนรัตนโกสินทร์ศก"
        }
    }
    else if ((first == "rattana") && (second == "jul")) {
        result = year - (-1143);
    }

    else result = "คุณจะแปลงศักราชเดียวกันไปทำไม?";

    alert(result);
}