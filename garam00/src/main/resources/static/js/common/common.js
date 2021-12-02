class dateUtil {

    isSameDay(target1, target2) {
        return target1.getFullYear() === target2.getFullYear() && target1.getMonth() === target2.getMonth() && target1.getDate() === target2.getDate();
    }

}

function resize(obj) {
    obj.style.height = "1px";
    obj.style.height = (12 + obj.scrollHeight) + "px";
}

function getCalTime(calTime) {
    if (calTime != null) {
        var tmp_Cal = calTime.substring(0, 10);
        var tmp_Time = calTime.substring(11, 15);

        var tmp_Arr_Cal = tmp_Cal.split("-");
        var tmp_Arr_Time = tmp_Time.split(":");

        var cal = tmp_Arr_Cal[0] + "." + tmp_Arr_Cal[1] + "." + tmp_Arr_Cal[2] + ".";
        var time = "";
        if (tmp_Arr_Time[1] < 10) {
            time = tmp_Arr_Time[0] + ":0" + tmp_Arr_Time[1];
        } else {
            time = tmp_Arr_Time[0] + ":" + tmp_Arr_Time[1];
        }

        return cal + " " + time;
    } else {
        return "없음";
    }
}
function getCal(cal) {
    if (cal != null) {
        var tmp_Arr_Cal = cal.split("-");

        var cal1 = tmp_Arr_Cal[0] + "년" + tmp_Arr_Cal[1] + "월" + tmp_Arr_Cal[2] + "일";

        return cal1;
    } else {
        return "진행 중";
    }
}

function getCalTimeInputJSP(calTime) {

    var tmpArr = calTime.split(' ');
    var tmpDate = tmpArr[0];
    var tmpTime = tmpArr[1];

    var rtn = tmpDate + "T" + tmpTime;

    console.log("ttrrtter   " + rtn);

    return rtn;
}

function getCalTimeInputJSPtoDB(calTime) {
    var aaa = '2021-04-01T10:30';

    var rtn_Date = calTime.substring(0, 10);
    var rtn_Time = calTime.substring(11);

    console.log("qqwdqdwdd   " + rtn_Date + ' ' + rtn_Time);

    return rtn_Date + ' ' + rtn_Time;
}

// Jquery Dependency

$("input[data-type='currency']").on({
    keyup: function () {
        formatCurrency($(this));
    },
    blur: function () {
        formatCurrency($(this), "blur");
    }
});

function formatNumber(n) {
    // format number 1000000 to 1,234,567
    return n
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function formatCurrency(input, blur) {
    // appends $ to value, validates decimal side and puts cursor back in right
    // position. get input value
    var input_val = input.val();

    // don't validate empty input
    if (input_val === "") {
        return;
    }

    // original length
    var original_len = input_val.length;

    // initial caret position
    var caret_pos = input.prop("selectionStart");

    // check for decimal
    if (input_val.indexOf(".") >= 0) {

        // get position of first decimal this prevents multiple decimals from being
        // entered
        var decimal_pos = input_val.indexOf(".");

        // split number by decimal point
        var left_side = input_val.substring(0, decimal_pos);
        var right_side = input_val.substring(decimal_pos);

        // add commas to left side of number
        left_side = formatNumber(left_side);

        // validate right side
        right_side = formatNumber(right_side);

        // On blur make sure 2 numbers after decimal
        if (blur === "blur") {
            right_side += "00";
        }

        // Limit decimal to only 2 digits
        right_side = right_side.substring(0, 2);

        // join number by .
        input_val = left_side + "." + right_side;

    } else {
        // no decimal entered add commas to number remove all non-digits
        input_val = formatNumber(input_val);
        input_val = input_val;
    }

    // send updated string to input
    input.val(input_val);

    // put caret back in the right position
    var updated_len = input_val.length;
    caret_pos = updated_len - original_len + caret_pos;
    input[0].setSelectionRange(caret_pos, caret_pos);
}
