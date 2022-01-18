$(document).ready(function () {
    getVeAll();
});

function getVeAll(vehicle) {
    const url = "/ve/veAll";
    const headers = {
        "Content-Type": "application/json",
        "X-HTTP-Method-Override": "POST"
    };

    const params = {
        "vehicle": vehicle
    };

    $.ajax({
        url: url,
        type: "POST",
        headers: headers,
        dataType: "json",
        data: JSON.stringify(params),

        success: function (r) {
            let htmls = '';
            for (let i = 0; i < r.length; i++) {
                htmls += '<tr id="' + r[i].carNumber + '" onclick="getVeInfo(this.id)" style="cursor:poi' +
                        'nter;">';
                htmls += '<td>'
                htmls += '<span>'
                htmls += r[i].vehicle2;
                htmls += '</span>'
                htmls += '</td>'
                if (r[i].owner) {
                    htmls += '<td>'
                    htmls += '<span>'
                    htmls += r[i].owner;
                    htmls += '</span>'
                    htmls += '</td>'
                } else {
                    htmls += '<td>'
                    htmls += '<span>'
                    htmls += '</span>'
                    htmls += '</td>'
                }
                if (r[i].bus) {
                    htmls += '<td>'
                    htmls += '<span>'
                    htmls += r[i].bus;
                    htmls += '</span>'
                    htmls += '</td>'
                } else {
                    htmls += '<td>'
                    htmls += '<span>'
                    htmls += '</span>'
                    htmls += '</td>'
                }
                if (r[i].regist) {
                    htmls += '<td>'
                    htmls += '<span>'
                    htmls += r[i].regist;
                    htmls += '</span>'
                    htmls += '</td>'
                } else {
                    htmls += '<td>'
                    htmls += '<span>'
                    htmls += '</span>'
                    htmls += '</td>'
                }
                if (r[i].name) {
                    htmls += '<td>'
                    htmls += '<span>'
                    htmls += r[i].name;
                    htmls += '</span>'
                    htmls += '</td>'
                } else {
                    htmls += '<td>'
                    htmls += '<span>'
                    htmls += '</span>'
                    htmls += '</td>'
                }
                htmls += '</tr>'
            }
            $('#ve-tb').html(htmls);
        }
    })
}

function getVeInfo(id) {
    return new Promise(function (resolve, reject) {
        // const url = "/emp/empdetail"; const headers = {     "Content-Type":
        // "application/json",     "X-HTTP-Method-Override": "POST" }; const params = {
        // "id": id }; $.ajax(     {url: url, type: "POST", headers: headers, dataType:
        // "json", data: JSON.stringify(params)} )
    });
}

$(document).on('keydown', 'input', function (eInner) {
    if ($('#ve-search').is(":focus")) {
        var keyValue = eInner.which; //enter key
        if (keyValue == 27) {
            getVeAll();
            $('#ve-search').val('');
        }
    }
});

$(document).on('click', '#btn-x', function () {
    getVeAll();
    $('#ve-search').val('');
});