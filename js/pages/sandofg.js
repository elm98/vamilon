function not1() {
    notif({
        msg: "ارسال موفق",
        type: "primary"
    });
}

function not2() {
    notif({
        msg: "<b>Oops!</b> A wild error appeared!",
        type: "error",
        position: "center"
    });
}

function not3() {
    notif({
        type: "warning",
        msg: "<b>Warning:</b> Be patient my friend.",
        position: "left"
    });
}

function not4() {
    notif({
        type: "info",
        msg: "<b>Info: </b>Some info here.",
        width: "all",
        height: 100,
        position: "center"
    });
}

function not5() {
    notif({
        type: "error",
        msg: "<b>Error: </b>This error will stay here until you click it.",
        position: "center",
        width: 500,
        height: 60,
        autohide: false
    });
}

function not6() {
    notif({
        type: "warning",
        msg: "Opacity is cool!",
        position: "center",
        opacity: 0.8
    });
}


$(document).ready(function() {

    $('#blockButton').click(function() {
        $('.test').block({ message: null });
    });

    $('#blockButton2').click(function() {
        $('div.test').block({
            message: '<h1>Processing</h1>',
            css: { border: '3px solid #a00' }
        });
    });

    $('#unblockButton').click(function() {
        $('div.test').unblock();
    });

    $('a.test').click(function() {
        alert('link clicked');
        return false;
    });

    $('.form-control').blur(function() {
        $(this).siblings().css('bottom','45px');
        $(this).siblings().css('background','#fff');
    });
});