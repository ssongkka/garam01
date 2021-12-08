const calen_Rsvt = new cal();

$(document).ready(function () {
    $("#ctmname").focus();

    $('#user-plus').hide();
    $('#userPlus').attr(
        'class',
        'fas fa-plus-circle BaseButton--skinGray size_default col-xs-12 plus-btn'
    );
});

$(document).on('click', '#btnUserPlus', function () {
    if ($('#user-plus').is(":visible")) {
        $('#user-plus').hide();
        $('#userPlus').attr(
            'class',
            'fas fa-plus-circle BaseButton--skinGray size_default col-xs-12 plus-btn'
        );
        $('#userPlus').attr('title', '고객정보 지우기');
    } else {
        $('#user-plus').show();
        $('#userPlus').attr(
            'class',
            'fas fa-minus-circle BaseButton--skinGray size_default col-xs-12 plus-btn'
        );
        $('#userPlus').attr('title', '닫기');
    }
});

function setCalWhite(e) {
    const day = calen_Rsvt.setCalclss(e);

    $('#stday').val(day);
    $('#endday').val(day);
    this.setBigDay(day);
    this.setCaldays(day);
}

function setBigDay(day) {
    const tmpArr = day.split("-");

    const date = new Date(tmpArr[0], tmpArr[1] + 1, tmpArr[2]);

    $('#bigDay').empty();
    $('#bigDay').prepend(
        tmpArr[0] + "년 " + tmpArr[1] + "월 " + tmpArr[2] + "일 " + calen.getDayOfWeek(date.getDay())
    );
}

function setCaldays(day) {

    const url = "/calendar/event";
    const headers = {
        "Content-Type": "application/json",
        "X-HTTP-Method-Override": "POST"
    };

    const params = {
        "stD": day,
        "endD": day
    };

    $.ajax({
        url: url,
        type: "POST",
        headers: headers,
        dataType: "json",
        data: JSON.stringify(params),

        success: function (r) {
            let mid = '';
            if (!!r[0].holiday) {
                mid += '<p>' + r[0].holiday + '</p>';
            }
            if (!!r[0].anniversary) {
                mid += '<p>' + r[0].anniversary + '</p>';
            }
            if (!!r[0].season) {
                mid += '<p>' + r[0].season + '</p>';
            }
            if (!!r[0].etc) {
                mid += '<p>' + r[0].etc + '</p>';
            }

            if (!mid) {
                mid += `<p>이벤트 없음</p>`;
            }

            $('#midday').html(mid);

            let cal = '';

            if (!!r[0].lunarCal) {
                cal = '음력 ' + r[0].lunarCal;
            } else {
                cal = '음력 정보없음';
            }

            $('#cal1').html(cal);
        }
    });
}

$("#ctmname").change(function () {

    var val = $('#ctmname').val();
    var idNum = $('#name-cho option')
        .filter(function () {
            return this.value == val;
        })
        .data('value');

    const url = "/customer/name";
    const headers = {
        "Content-Type": "application/json",
        "X-HTTP-Method-Override": "POST"
    };

    const params = {
        "ctmseq": idNum
    };
    console.log(params);
    $.ajax({
        url: url,
        type: "POST",
        headers: headers,
        dataType: "json",
        data: JSON.stringify(params),
        success: function (r) {

            $('#ctmseq').val('');
            $('#radio0').prop('checked', true);
            $('#ctmtel1').val('');
            $('#ctmstp').val('');
            $('#ctmdetail').val('');
            $('#ctmtel2').val('');
            $('#ctmfax').val('');
            $('#ctmaddress').val('');
            $('#ctmhomepage').val('');

            $('#ctmseq').val(r[0].ctmseq);

            if (r[0].ctmsepa === 0) {
                $('#radio0').prop('checked', true);
            } else if (r[0].ctmsepa === 1) {
                $('#radio1').prop('checked', true);
            } else if (r[0].ctmsepa === 2) {
                $('#radio2').prop('checked', true);
            };

            $('#ctmtel1').val(r[0].ctmtel1);
            $('#ctmstp').val(r[0].ctmstp);
            $('#rsvpstp').val($('#ctmstp').val());
            $('#ctmdetail').val(r[0].ctmdetail);
            $('#ctmtel2').val(r[0].ctmtel2);
            $('#ctmfax').val(r[0].ctmfax);
            $('#ctmaddress').val(r[0].ctmaddress);
            $('#ctmhomepage').val(r[0].ctmhomepage);
        }
    });
});

$("#endday").change(function () {
    const origin = $("#endday").val();
    const std = new Date($("#stday").val());
    const edd = new Date($("#endday").val());
    console.log(std);
    console.log(edd);

    var dateDiff = Math.ceil((edd.getTime() - std.getTime()) / (1000 * 3600 * 24));

    console.log(dateDiff);

    if (dateDiff === 0) {
        $("#daynight").text('(당일)');
    } else if (dateDiff > 0) {
        const day = '(' + dateDiff + '박' + (
            dateDiff + 1
        ) + '일)';
        $("#daynight").text(day);
    } else {
        $("#endday").val(origin);
        alert('도착일을 확인해주세요.');
    }
});

$(document).on('click', '#eraser', function () {

    if (confirm('입력 내용을 지우시겠습니까?')) {
        $('#ctmseq').val('0');

        $('#ctmname').val('');
        $('#ctmtel1').val('');
        $('#ctmstp').val('');
        $('#ctmdetail').val('');
        $('#ctmtel2').val('');
        $('#ctmfax').val('');
        $('#ctmaddress').val('');
        $('#ctmhomepage').val('');

        const aaa = document.getElementsByClassName('dash-cal-con-item-t');
        const bbb = aaa[0].getElementsByTagName('div')[0];
        const ccc = bbb.childNodes[1];
        const ddd = ccc.value;

        $('#rsvt').val('');

        $('#stday').val(ddd);
        $('#endday').val(ddd);

        $('#stt').val('08:30');
        $('#endt').val('08:30');

        $('#bus').val('대형');
        $('#num').val('1');

        $('#rsvpstp').val('');
        $('#desty').val('');
        $('#rsvtdetail').val('');
        $('#cont').val('포함');
        $('#conm').val('');

        $('html').scrollTop(0);

        $("#ctmname").focus();
    }
});
$(document).on('click', '#ername', function () {
    $('#radio0').prop('checked', true);
    $('#ctmseq').val('0');

    $('#ctmname').val('');
    $('#ctmtel1').val('');
    $('#ctmstp').val('');
    $('#ctmdetail').val('');
    $('#ctmtel2').val('');
    $('#ctmfax').val('');
    $('#ctmaddress').val('');
    $('#ctmhomepage').val('');
});

$(document).on('click', '#insert-rsvt', function () {
    let money = $('#conm2')
        .val()
        .replace(",", "");
    money = money.replace(",", "");
    money = money.replace(",", "");
    money = money.replace(",", "");
    $('#conm').val();

    formRsvt.submit();
});