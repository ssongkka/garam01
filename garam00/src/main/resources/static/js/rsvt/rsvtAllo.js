$(document).ready(function () {});

$(document).on('keydown', 'input', function (eInner) {
    var keyValue = eInner.which; //enter key
    console.log('asdasd');
    if (keyValue == 37 || keyValue == 39) {
        var tabindex = $(this).attr('tabindex');
        if (keyValue == 39) { //down arrow 40
            tabindex++;
        } else { //up arrow 38
            tabindex--;
        }
        $('[tabindex=' + tabindex + ']').focus();
        $('[tabindex=' + tabindex + ']').scrollIntoView();
    }
});

function getAlloList(day) {
    getCustomer()
        .then(getRsvt)
        .then(getOper);

    function getCustomer() {
        return new Promise(function (resolve, reject) {
            const url = "/allo/customer";
            const headers = {
                "Content-Type": "application/json",
                "X-HTTP-Method-Override": "POST"
            };

            day = '2019-11-29';

            const params = {
                "stday": day
            };

            $.ajax({
                url: url,
                type: "POST",
                headers: headers,
                dataType: "json",
                data: JSON.stringify(params),

                success: function (r) {

                    let ctmseqArr = new Array();
                    let htmls = '';
                    for (let i = 0; i < r.length; i++) {
                        ctmseqArr[i] = r[i].ctmseq;

                        htmls += '<div class="card allo-card">';
                        htmls += '<input type="hidden" id="rvctm' + (
                            i + 1
                        ) + '" value="' + r[i].ctmseq + '">';
                        htmls += '<input type="hidden" id="rvctmsepa' + (
                            i + 1
                        ) + '" value="' + r[i].ctmsepa + '">';
                        switch (r[i].ctmsepa) {
                            case 0:
                                htmls += '<div><h4><i class="fas fa-user-check"></i>&nbsp;&nbsp;&nbsp;' + r[i].ctmname +
                                        '<small>' + r[i].ctmtel1 + '</small></h4></div>';

                                break;
                            case 1:
                                htmls += '<div><h4><i class="fas fa-school"></i>&nbsp;&nbsp;&nbsp;' + r[i].ctmname + '<s' +
                                        'mall>' + r[i].ctmtel1 + '</small><small>' + r[i].ctmaddress + '</small></h4></' +
                                        'div>';

                                break;
                            case 2:
                                htmls += '<div><h4><i class="fas fa-file-signature"></i>&nbsp;&nbsp;&nbsp;' + r[i].ctmname +
                                        '<small>' + r[i].ctmtel1 + '</small><small>' + r[i].ctmtel2 +
                                        '</small><small>' + r[i].ctmdetail + '</small></h4></div>';

                                break;
                            default:
                                break;
                        }

                        htmls += '<hr>';
                        htmls += '<div class="rv" id="rv' + r[i].ctmseq + '">';
                        htmls += '</div>';
                        htmls += '</div>';
                    }
                    $('#allocont').html(htmls);
                    resolve(ctmseqArr);
                }
            })
        });
    }
    function getRsvt(result) {
        return new Promise(function (resolve, reject) {
            const url = "/allo/rsvt";
            const headers = {
                "Content-Type": "application/json",
                "X-HTTP-Method-Override": "POST"
            };

            const params = {
                "stday": day
            };

            $.ajax({
                url: url,
                type: "POST",
                headers: headers,
                dataType: "json",
                data: JSON.stringify(params),

                success: function (r) {

                    let rst = new Array();

                    let ctmseqHtml = new Array();
                    for (let index = 0; index < result.length; index++) {
                        ctmseqHtml[index] = '';
                    }

                    let cnt = 0;
                    for (let i = 0; i < r.length; i++) {

                        rst[i] = r[i].rsvt;

                        let htmls = '';

                        htmls += '<div class="card allo-card-in">';
                        htmls += '<input type="hidden" id="oprsvtseq-' + r[i].rsvtseq + '" value="' + r[i].rsvt +
                                '">';
                        htmls += '<div class="allo-detail">';
                        htmls += '<div class="allo-detail-item">';
                        htmls += '<blockquote>';
                        htmls += '<p>' + r[i].desty + '</p>';
                        htmls += '</blockquote>';
                        htmls += '</div>';
                        htmls += '<div class="allo-detail-item">';
                        htmls += '<small>' + r[i].rsvpstp + '</small>';
                        htmls += '</div>';
                        htmls += '<div class="allo-detail-item">';
                        htmls += '<small>' + r[i].stt + ' / ' + r[i].endt + '</small>';
                        htmls += '</div>';
                        htmls += '<div class="allo-detail-item">';

                        if (r[i].num > 1) {
                            htmls += '<small>&#8361;' + AddComma(r[i].conm) + '(' + (
                                AddComma(r[i].conm / r[i].num)
                            ) + ')</small> ';
                        } else {
                            htmls += '<small>&#8361;' + AddComma(r[i].conm) + '</small> ';
                        }
                        htmls += '<small>' + r[i].cont + '</small> ';

                        htmls += '</div>';
                        htmls += '</div>';
                        htmls += '<hr>';
                        htmls += '<div class="allo-allo form-group">';

                        for (let k = 0; k < r[i].num; k++) {
                            htmls += '<div class="allo-allo-item col-xs-6 col-lg-4">';
                            htmls += ' <input type="hidden" id="' + r[i].rsvtseq + '-' + (
                                k + 1
                            ) + '" value="">';
                            htmls += '<div class="stWay" id="st-' + r[i].rsvtseq + '-' + (
                                k + 1
                            ) + '">';
                            htmls += '<input type="text" list="car-info" tabindex="' + (
                                ++cnt
                            ) + '" placeholder="' + (
                                k + 1
                            ) + '호차">';
                            htmls += '<input type="text" list="per-info" tabindex="-1" placeholder="승무원">';
                            htmls += '<input type="hidden" name="atlm1" id="atlm1" tabindex="-1">';
                            htmls += '<input type="text" id="atlmst" data-type="currency" tabindex="' + (
                                ++cnt
                            ) + '" placeholder="배차금액">';
                            htmls += '</div>';
                            htmls += ' <div class="edway" style="display: none;" id="ed-' + r[i].rsvtseq + '-' + (
                                k + 1
                            ) + '">';
                            htmls += '<input type="text" list="car-info" tabindex="-1" placeholder="편도">';
                            htmls += '<input type="text" list="per-info" tabindex="-1" placeholder="승무원">';
                            htmls += '<input type="hidden" name="atlm2" id="atlm2" tabindex="-1">';
                            htmls += '<input type="text" id="atlmed" data-type="currency" tabindex="-1" placeholder=' +
                                    '"배차금액">';
                            htmls += '</div>';
                            htmls += '</div>';
                        }

                        htmls += '</div>';
                        htmls += '</div>';
                        for (let j = 0; j < result.length; j++) {
                            if (r[i].ctmseq == result[j]) {
                                ctmseqHtml[j] += htmls;
                            }
                        }
                    }
                    for (let j = 0; j < ctmseqHtml.length; j++) {
                        $('#rv' + result[j]).html(ctmseqHtml[j]);
                    }
                    resolve(rst);
                }
            })
        });
    }
    function getOper(result) {
        return new Promise(function (resolve, reject) {
            const url = "/allo/oper";
            const headers = {
                "Content-Type": "application/json",
                "X-HTTP-Method-Override": "POST"
            };

            const params = {
                "stday": day
            };

            $.ajax({
                url: url,
                type: "POST",
                headers: headers,
                dataType: "json",
                data: JSON.stringify(params),

                success: function (r) {
                    for (let i = 0; i < r.length; i++) {
                        $('#' + r[i].rsvtseq + '-' + r[i].operno).val(r[i].opernum);
                        console.log($('#' + r[i].rsvtseq + '-' + r[i].operno).val());
                        var stid = '#st-' + r[i].rsvtseq + '-' + r[i].operno;
                        if (r[i].opertype === 0) {
                            $(stid)
                                .children()
                                .first()
                                .val(r[i].opercar);
                            $(stid)
                                .children()
                                .first()
                                .next()
                                .val(r[i].operid);
                            $(stid)
                                .children()
                                .first()
                                .next()
                                .next()
                                .val(r[i].atlm);
                            $(stid)
                                .children()
                                .first()
                                .next()
                                .next()
                                .next()
                                .val(AddComma(r[i].atlm));

                        } else {
                            var edid = '#ed-' + r[i].rsvtseq + '-' + r[i].operno;
                            switch (r[i].opertype) {
                                case 1:
                                    $(stid)
                                        .children()
                                        .first()
                                        .val(r[i].opercar);
                                    $(stid)
                                        .children()
                                        .first()
                                        .next()
                                        .val(r[i].operid);
                                    $(stid)
                                        .children()
                                        .first()
                                        .next()
                                        .next()
                                        .val(r[i].atlm);
                                    $(stid)
                                        .children()
                                        .first()
                                        .next()
                                        .next()
                                        .next()
                                        .val(AddComma(r[i].atlm));
                                    break;

                                case 2:
                                    $(edid)
                                        .children()
                                        .first()
                                        .val(r[i].opercar);
                                    $(edid)
                                        .children()
                                        .first()
                                        .next()
                                        .val(r[i].operid);
                                    $(edid)
                                        .children()
                                        .first()
                                        .next()
                                        .next()
                                        .val(r[i].atlm);
                                    $(edid)
                                        .children()
                                        .first()
                                        .next()
                                        .next()
                                        .next()
                                        .val(AddComma(r[i].atlm));
                                    break;

                                default:
                                    break;
                            }
                        }
                    }
                }
            })
        });
    }

    function keydown_Arr() {
        $('input').on('keydown', function (eInner) {
            var keyValue = eInner.which; //enter key
            console.log('asdasd');
            if (keyValue == 37 || keyValue == 39) {
                var tabindex = $(this).attr('tabindex');
                if (keyValue == 39) { //down arrow 40
                    tabindex++;
                } else { //up arrow 38
                    tabindex--;
                }
                $('[tabindex=' + tabindex + ']').focus();
            }
        });
    }
}

$(document).on('click', '#onewayBtn', function () {
    if ($('.edway').is(":visible")) {
        $('.edway').hide();
    } else {
        $('.edway').show();
    }
});
