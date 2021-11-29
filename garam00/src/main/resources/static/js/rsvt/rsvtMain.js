$(document).ready(function () {
    $('#user-plus').hide();
    $('#btnUserPlus').html(
        `<a class="fas fa-plus-circle BaseButton--skinGray size_default col-xs-12 plus-btn">&nbsp;추가정보입력</a>`
    );
});

$(document).on('click', '#btnUserPlus', function () {
    console.log($('#user-plus').is(":visible"));

    if ($('#user-plus').is(":visible")) {
        $('#user-plus').hide();
        $('#btnUserPlus').html(
            `<a class="fas fa-plus-circle BaseButton--skinGray size_default col-xs-12 plus-btn">&nbsp;추가정보입력</a>`
        );
    } else {
        $('#user-plus').show();
        $('#btnUserPlus').html(
            `<a class="fas fa-minus-circle BaseButton--skinGray size_default col-xs-12 plus-btn">&nbsp;추가정보입력 닫기</a>`
        );
    }
});