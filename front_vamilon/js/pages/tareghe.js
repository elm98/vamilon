$(function () {
    $("aks-file-upload").aksFileUpload({
        fileUpload: "#uploadfile",
        dragDrop: true,
        maxSize: "90 GB",
        multiple: true,
        maxFile: 50
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


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
        $('.test2').block({ message: null });
    });

    $('#unblockButton').click(function() {
        $('.test').unblock();
    });


});

$(document).ready(function () {
    $('#datepicker0').pDatepicker({
        "format": "L",
        "timePicker": {
            "enabled": false,
        }
    });
    $('#datepicker1').pDatepicker({
        "format": "L",
        "timePicker": {
            "enabled": false,
        }

    });
    $('#datepicker2').pDatepicker({
        "format": "L",
        "timePicker": {
            "enabled": false,
        }
    });
});