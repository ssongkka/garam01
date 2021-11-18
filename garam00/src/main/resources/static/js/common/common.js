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

