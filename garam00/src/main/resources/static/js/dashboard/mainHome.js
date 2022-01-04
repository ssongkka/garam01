function getRsvtList(r) {
    let htmlsHome = '';
    let htmlsSchool = '';
    let htmlsaccount = '';

    let cnt01 = 1;
    let cnt02 = 1;

    let cntArr = new Array();
    for (let i = 0; i < r.length; i++) {
        switch (r[i].ctmsepa) {
            case 0:
                htmlsHome += '<tr>';
                htmlsHome += '<td>';
                htmlsHome += r[i].ctmname;
                htmlsHome += '</td>';

                htmlsHome += '<td style="text-align: left; padding-left: 2rem;">';
                htmlsHome += r[i].desty;
                htmlsHome += '</td>';

                htmlsHome += '<td>';
                htmlsHome += r[i].bus;
                htmlsHome += '</td>';

                htmlsHome += '<td>';
                htmlsHome += r[i].num;
                htmlsHome += '</td>';

                htmlsHome += '<td style="text-align: right; padding-right: 2rem;">';
                htmlsHome += AddComma(r[i].conm);
                htmlsHome += '</td>';

                htmlsHome += '<td style="text-align: left; padding-left: 2rem;">';
                htmlsHome += r[i].rsvpstp;
                htmlsHome += '</td>';

                htmlsHome += '<td>';
                htmlsHome += r[i].stt;
                htmlsHome += '</td>';
                htmlsHome += '</tr>';
                break;
            case 1:
                if (i == 0 || cnt01 == 1) {
                    htmlsSchool += '<tr>';
                    htmlsSchool += '<td id="td' + cnt01 + '">';
                    htmlsSchool += r[i].ctmname;
                    htmlsSchool += '</td>';

                    htmlsSchool += '<td>';
                    htmlsSchool += r[i].bus;
                    htmlsSchool += '</td>';

                    cnt01++;
                } else {
                    if (r[i - 1].ctmno == r[i].ctmno) {
                        htmlsSchool += '<tr>';
                        htmlsSchool += '<td>';
                        htmlsSchool += r[i].bus;
                        htmlsSchool += '</td>';

                        cnt02++;
                    } else {
                        htmlsSchool += '<tr>';
                        htmlsSchool += '<td id="td' + cnt01 + '">';
                        htmlsSchool += r[i].ctmname;
                        htmlsSchool += '</td>';

                        htmlsSchool += '<td>';
                        htmlsSchool += r[i].bus;
                        htmlsSchool += '</td>';

                        cnt01++;
                        cntArr.push(cnt02);
                        cnt02 = 1;
                    }
                }

                htmlsSchool += '<td>';
                htmlsSchool += r[i].num;
                htmlsSchool += '</td>';

                htmlsSchool += '<td style="text-align: left; padding-left: 2rem;">';
                htmlsSchool += r[i].desty;
                htmlsSchool += '</td>';

                htmlsSchool += '<td style="text-align: left; padding-left: 2rem;">';
                htmlsSchool += r[i].rsvpstp;
                htmlsSchool += '</td>';

                htmlsSchool += '<td>';
                htmlsSchool += r[i].stt;
                htmlsSchool += '</td>';

                htmlsSchool += '<td style="text-align: right; padding-right: 2rem;">';
                htmlsSchool += AddComma(r[i].conm);
                htmlsSchool += '</td>';
                htmlsSchool += '</tr>';
                break;
            case 2:
                htmlsaccount += '<tr>';
                htmlsaccount += '<td>';
                htmlsaccount += r[i].ctmname;
                htmlsaccount += '</td>';

                htmlsaccount += '<td style="text-align: left; padding-left: 2rem;">';
                htmlsaccount += r[i].desty;
                htmlsaccount += '</td>';

                htmlsaccount += '<td>';
                htmlsaccount += r[i].bus;
                htmlsaccount += '</td>';

                htmlsaccount += '<td>';
                htmlsaccount += r[i].num;
                htmlsaccount += '</td>';

                htmlsaccount += '<td>';
                htmlsaccount += AddComma(r[i].conm);
                htmlsaccount += '</td>';

                htmlsaccount += '<td style="text-align: left; padding-left: 2rem;">';
                htmlsaccount += r[i].rsvpstp;
                htmlsaccount += '</td>';

                htmlsaccount += '<td style="text-align: right; padding-right: 2rem;">';
                htmlsaccount += r[i].stt;
                htmlsaccount += '</td>';
                htmlsaccount += '</tr>';
                break;
            default:
                break;
        }
    }

    console.log("aaaa " + htmlsHome);
    console.log("bbbb " + htmlsSchool);
    console.log("cccc " + htmlsaccount);

    if (htmlsHome) {
        $('#home-tb-normal').html(htmlsHome);
    } else {
        $('#home-tb-normal').html(`<tr><td colspan="7">운행 정보 없음</td>
    </tr>`);
    }

    if (htmlsSchool) {
        cntArr.push(cnt02);
        $('#home-tb-school').html(htmlsSchool);
        for (let i = 0; i < cntArr.length; i++) {
            const idd = '#td' + (
                i + 1
            );
            $(idd).attr('rowspan', cntArr[i]);
        }
    } else {
        $('#home-tb-school').html(`<tr><td colspan="7">운행 정보 없음</td>
        </tr>`);
    }
    if (htmlsaccount) {
        $('#home-tb-account').html(htmlsaccount);
    } else {
        $('#home-tb-account').html(`<tr><td colspan="7">운행 정보 없음</td>
        </tr>`);
    }
}