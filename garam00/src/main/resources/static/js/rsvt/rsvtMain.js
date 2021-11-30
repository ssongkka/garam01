const calen_Rsvt = new cal();

$(document).ready(function () {
    $('#user-plus').hide();
    $('#btnUserPlus').html(
        `<a class="fas fa-plus-circle BaseButton--skinGray size_default col-xs-12 plus-btn"></a>`
    );
});

$(document).on('click', '#btnUserPlus', function () {
    if ($('#user-plus').is(":visible")) {
        $('#user-plus').hide();
        $('#btnUserPlus').html(
            `<a class="fas fa-plus-circle BaseButton--skinGray size_default col-xs-12 plus-btn"></a>`
        );
    } else {
        $('#user-plus').show();
        $('#btnUserPlus').html(
            `<a class="fas fa-minus-circle BaseButton--skinGray size_default col-xs-12 plus-btn"></a>`
        );
    }
});

function setCalWhite(e) {

    console.log(e);
    const day = calen_Rsvt.setCalclss(e);
    console.log(day);

    console.log($('#st_day').val());

    $('#st_day').val(day);
    $('#end_day').val(day);
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
$(document).on('change', '#name', function () {

    var val = $('#name').val()
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
        "no": idNum
    };
    console.log(params);
    $.ajax({
        url: url,
        type: "POST",
        headers: headers,
        dataType: "json",
        data: JSON.stringify(params),
        success: function (r) {
            console.log(r);
            $('#tel1').val('');
            $('#start').val('');
            $('#detail').val('');
            $('#tel2').val('');
            $('#fax').val('');
            $('#address').val('');
            $('#homepage').val('');

            $('#tel1').val(r[0].tel1);
            $('#start').val(r[0].start);
            $('#startP').val($('#start').val());
            $('#detail').val(r[0].detail);
            $('#tel2').val(r[0].tel2);
            $('#fax').val(r[0].fax);
            $('#address').val(r[0].address);
            $('#homepage').val(r[0].tehomepagel1);
        }
    });
});
$(document).on('change', '#tel1', function () {

    var val = $('#tel1').val()
    var idNum = $('#tel1-cho option')
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
        "no": idNum
    };
    console.log(params);
    $.ajax({
        url: url,
        type: "POST",
        headers: headers,
        dataType: "json",
        data: JSON.stringify(params),
        success: function (r) {
            console.log(r);
            $('#name').val('');
            $('#start').val('');
            $('#detail').val('');
            $('#tel2').val('');
            $('#fax').val('');
            $('#address').val('');
            $('#homepage').val('');

            $('#name').val(r[0].name);
            $('#start').val(r[0].start);
            $('#startP').val($('#start').val());
            $('#detail').val(r[0].detail);
            $('#tel2').val(r[0].tel2);
            $('#fax').val(r[0].fax);
            $('#address').val(r[0].address);
            $('#homepage').val(r[0].tehomepagel1);
        }
    });
});
