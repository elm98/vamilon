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
        return false;
    });

    if($('#form-control3').val().length  !=  0){
        $('#form-control3').siblings().css('bottom','50px');
        $('#form-control3').siblings().css('background','#fff');


    }
    if($('#form-control1').val().length  !=  0){
        $('#form-control1').siblings().css('bottom','50px');
        $('#form-control1').siblings().css('background','#fff');


    }
    if($('#form-control2').val().length  !=  0){
        $('#form-control2').siblings().css('bottom','50px');
        $('#form-control2').siblings().css('background','#fff');


    }

    $('.form-control2').blur(function() {
        if($(this).val() !=  null){
            $(this).siblings().css('bottom','50px');
            $(this).siblings().css('background','#fff');

        }

    });
});