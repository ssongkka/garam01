$(document).ready(function () {
    $('#info-limit').hide();
    const now_D = new Date();

    const nowMonth = new Date(now_D.getFullYear(), now_D.getMonth(), 1);
    const nowDay = new Date(now_D.getFullYear(), now_D.getMonth(), now_D.getDate());

    const id = setCalendar(nowMonth, nowDay);
});

function setCalWhite(e) {
    const calID = "#" + e;

    const dashCal = $('.dash-cal-con-item-t');
    for (var i = 0; i < dashCal.length; i++) {
        $(dashCal[i]).prop('class', 'dash-cal-con-item-c');
    }

    $(calID).prop('class', 'dash-cal-con-item-t')
    const aaa = $(calID).find('input');
    const dayID = "#" + aaa.attr('id');
    const getDay = $(dayID).val();

    setBigDay(getDay);
    setMidDay(getDay);
    // setCaldays(getDay);
}

function setBigDay(day) {
    const tmpArr = day.split("-");

    const date = new Date(tmpArr[0], tmpArr[1] + 1, tmpArr[2]);

    $('#bigDay').empty();

    console.log(tmpArr[0] + "년 ");
    console.log(tmpArr[1] + "월 ");
    console.log(tmpArr[2] + "일 ");

    $('#bigDay').prepend(
        tmpArr[0] + "년 " + tmpArr[1] + "월 " + tmpArr[2] + "일 " + getDayOfWeek(date.getDay())
    );
}

function setMidDay(day) {
    const tmpArr = day.split("-");
    const daySt = new Date(tmpArr[0], (tmpArr[1] - 1), tmpArr[2]);
    let ch_day = new Date(daySt);

    for (var i = 0; i < 7; i++) {
        var id = "#dash-day-" + String(i);

        if (i === 0) {
            ch_day = new Date(ch_day.setDate(ch_day.getDate() + 0));
        } else {
            ch_day = new Date(ch_day.setDate(ch_day.getDate() + 1));
        }

        $(id).empty();
        $(id).prepend(ch_day.getDate());
    }

    let a = daySt.getDay();
    const tmp = [];
    for (var i = 0; i < 7; i++) {

        if (a < 7) {
            tmp.push(a);
        } else {
            a = 0;
            tmp.push(a);
        }
        a = a + 1;
    }

    for (var i = 0; i < 7; i++) {
        const id = "#dash-week-" + String(i);

        if (tmp[i] === 0) {
            $(id).prop('class', 'dash-4-item-1 card-title cal-sun');
        } else if (tmp[i] === 6) {
            $(id).prop('class', 'dash-4-item-1 card-title cal-sat');
        } else {
            $(id).prop('class', 'dash-4-item-1 card-title');
        }

        $(id).empty();
        $(id).prepend(getDayOfWeek(tmp[i]));
    }
}

function getDayOfWeek(num) {
    let rtn = "";

    switch (num) {
        case 1:
            rtn = "월요일";
            return rtn;
        case 2:
            rtn = "화요일";
            return rtn;
        case 3:
            rtn = "수요일";
            return rtn;
        case 4:
            rtn = "목요일";
            return rtn;
        case 5:
            rtn = "금요일";
            return rtn;
        case 6:
            rtn = "토요일";
            return rtn;
        default:
            rtn = "일요일";
            return rtn;
    }
}