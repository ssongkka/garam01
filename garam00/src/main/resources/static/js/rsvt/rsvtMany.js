/**
 *
 */
$(document).ready(function () {
    const day = toStringByFormatting(new Date());
    $("#std").val(day);
    $("#edd").val(day);
});

$(document).on('click', '#plus-btn', function () {
    const aaa = $('#plus-btn')
        .parents()
        .prev()
        .children()
        .children()
        .length;
    const bbb = $('#plus-btn')
        .parents()
        .prev()
        .children()
        .children()[aaa - 1];
    let htmls = '<tr>';
    htmls += '<td>';
    htmls += '<input type="date" class="input-sm" onchange="ccc(this)"';
    htmls += ' value="' + $('#std').val() + '">';
    htmls += '</td>';
    htmls += '<td>';
    htmls += '<input type="date" class="input-sm"';
    htmls += ' value="' + $('#edd').val() + '">';
    htmls += '</td>';
    htmls += '<td>';
    htmls += '<select id="bus" name="bus" class="input-sm">';
    htmls += '<option value="대형">대형</option>';
    htmls += '<option value="중형">중형</option>';
    htmls += '<option value="우등">우등</option>';
    htmls += '<option value="기타">기타</option>';
    htmls += '</select>';
    htmls += '</td>';
    htmls += '<td>';
    htmls += '<select class="input-sm">';
    htmls += '<option value="1">1</option>';
    htmls += '<option value="2">2</option>';
    htmls += '<option value="3">3</option>';
    htmls += '<option value="4">4</option>';
    htmls += '<option value="5">5</option>';
    htmls += '<option value="6">6</option>';
    htmls += '<option value="7">7</option>';
    htmls += '<option value="8">8</option>';
    htmls += '<option value="9">9</option>';
    htmls += '<option value="10">10</option>';
    htmls += '<option value="11">11</option>';
    htmls += '<option value="12">12</option>';
    htmls += '<option value="13">13</option>';
    htmls += '<option value="14">14</option>';
    htmls += '<option value="15">15</option>';
    htmls += '<option value="16">16</option>';
    htmls += '<option value="17">17</option>';
    htmls += '<option value="18">18</option>';
    htmls += '<option value="19">19</option>';
    htmls += '<option value="20">20</option>';
    htmls += '<option value="21">21</option>';
    htmls += '<option value="22">22</option>';
    htmls += '<option value="23">23</option>';
    htmls += '<option value="24">24</option>';
    htmls += '<option value="25">25</option>';
    htmls += '<option value="26">26</option>';
    htmls += '<option value="27">27</option>';
    htmls += '<option value="28">28</option>';
    htmls += '<option value="29">29</option>';
    htmls += '<option value="30">30</option>';
    htmls += '<option value="31">31</option>';
    htmls += '<option value="32">32</option>';
    htmls += '<option value="33">33</option>';
    htmls += '<option value="34">34</option>';
    htmls += '<option value="35">35</option>';
    htmls += '<option value="36">36</option>';
    htmls += '<option value="37">37</option>';
    htmls += '<option value="38">38</option>';
    htmls += '<option value="39">39</option>';
    htmls += '<option value="40">40</option>';
    htmls += '<option value="41">41</option>';
    htmls += '<option value="42">42</option>';
    htmls += '<option value="43">43</option>';
    htmls += '<option value="44">44</option>';
    htmls += '<option value="45">45</option>';
    htmls += '<option value="46">46</option>';
    htmls += '<option value="47">47</option>';
    htmls += '<option value="48">48</option>';
    htmls += '<option value="49">49</option>';
    htmls += '<option value="50">50</option>';
    htmls += '</select>';
    htmls += '</td>';
    htmls += '<td>';
    htmls += '<input type="time" class="input-sm" value="08:30">';
    htmls += '</td>';
    htmls += '<td>';
    htmls += '<input type="time" class="input-sm" value="08:30">';
    htmls += '</td>';
    htmls += '<td>';
    htmls += '<input type="text"';
    htmls += ' value="' + $('#stp').val() + '">';
    htmls += '</td>';
    htmls += '<td>';
    htmls += '<input type="text">';
    htmls += '</td>';
    htmls += '<td>';
    htmls += '<input type="text">';
    htmls += '</td>';
    htmls += '<td>';
    htmls += '<select class="input-sm">';
    htmls += '<option value="포함">포함</option>';
    htmls += '<option value="미포함">미포함</option>';
    htmls += '<option value="카드">카드</option>';
    htmls += '</select>';
    htmls += '</td>';
    htmls += '<td>';
    htmls += '<input type="text"';
    // htmls += 'data-type="currency"';
    htmls += 'class="input-sm ipm"';
    htmls += 'value="0"';
    htmls += 'style="text-align: right;">';
    htmls += '</td>';
    htmls += '<td class="th-ct">';
    htmls += '<a class="far fa-times-circle" onclick="minusCont(this)"></a>';
    htmls += '</td>';
    htmls += '</tr>';
    $(bbb).after(htmls);

    $(document)
        .find('.ipm')
        .each(function (e) {
            console.log("찾았따");
            console.log($('.ipm'));
            $('.ipm').attr('data-type', 'currency');
        })

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

    const ccc = $('#plus-btn')
        .parents()
        .prev()
        .children()
        .children()
        .children()
        .children()
        .length;
    const ddd = $('#plus-btn')
        .parents()
        .prev()
        .children()
        .children()
        .children()
        .children()[(12 * (ccc / 12)) - 12];

    console.log(ddd);
    $(ddd).focus();
});

$(document).on('change', '#std', function () {
    $("#edd").val($("#std").val())
});

function minusCont(value) {
    const aaa = $(value)
        .parents()
        .parents()[0];
    console.log(aaa);
    $(aaa).remove();
}

function ccc(value) {
    var aaa = $(value)
        .parents()
        .next();
    var bbb = aaa.children();
    bbb.val($(value).val());
}

$(document).on('click', '#btn-modal', function () {
    $('#myModal').modal("hide");
});

$(document).on('click', '#insert-many', function () {
    const aaa = $('#rsvt-tb')
        .children()
        .children()
        .children()
        .children();
    console.log(aaa);
    console.log(aaa.length);

    let params = new Array();
    $(aaa[0]).val()
    for (let index = 0; index < aaa.length; index = index + 12) {
        console.log($(aaa[index]).val());
        const asd = {
            "rsvt": get_Rsvt(11, $(aaa[index]).val(), index),
            "ctmseq": 1,
            "empin": $('#empin').val(),
            "stday": $(aaa[index]).val(),
            "endday": $(aaa[index + 1]).val(),
            "bus": $(aaa[index + 2]).val(),
            "num": $(aaa[index + 3]).val(),
            "desty": $(aaa[index + 7]).val(),
            "rsvpstp": $(aaa[index + 6]).val(),
            "stt": $(aaa[index + 4]).val(),
            "endt": $(aaa[index + 5]).val(),
            "rsvtdetail": $(aaa[index + 8]).val(),
            "cont": $(aaa[index + 9]).val(),
            "conm": $(aaa[index + 10])
                .val()
                .replaceAll(",", "")
        };
        params.push(asd);
    }
    console.log(params);
    console.log(params.length);

    const url = "/rsvtmany/insert";
    const headers = {
        "Content-Type": "application/json",
        "X-HTTP-Method-Override": "POST"
    };

    $.ajax({
        url: url,
        type: "POST",
        headers: headers,
        dataType: "json",
        data: JSON.stringify(params),
        // data: params,

        success: function (r) {
            console.log(r);
            alert("하이");
        }
    });
});

function get_Rsvt(ctmseq, stday, index) {

    const rsvt1 = "R-" + ctmseq + "-";
    const rsvt2 = stday
        .substring(2)
        .replaceAll("-", "") + "-";
    const rsvt3 = new Date()
        .toISOString()
        .substring(2, 20)
        .replaceAll("-", "")
        .replaceAll(":", "")
        .replaceAll(".", "-") + index;

    const rtn = rsvt1 + rsvt2 + rsvt3;
    return rtn;
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

            $('#ctmno').val('');
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

$(document).on('click', '#ername', function () {
    ernm();
});

$(document).on('keydown', 'input', function (eInner) {
    console.log($('#ctmname').is(":focus"));
    if ($('#ctmname').is(":focus")) {
        var keyValue = eInner.which; //enter key
        console.log(keyValue);
        if (keyValue == 8) {
            ernm();
        } else if (keyValue == 27) {
            ernm();
        } else if (keyValue == 46) {
            ernm();
        }
    }
});

function ernm() {
    $('#radio0').prop('checked', true);
    $('#ctmno').val('0');

    $('#ctmname').val('');
    $('#ctmtel1').val('');
    $('#ctmstp').val('');
    $('#ctmdetail').val('');
    $('#ctmtel2').val('');
    $('#ctmfax').val('');
    $('#ctmaddress').val('');
    $('#ctmhomepage').val('');
}
