
$(function () {
    $("aks-file-upload").aksFileUpload({
        fileUpload: "#uploadfile",
        dragDrop: true,
        maxSize: "90 GB",
        multiple: true,
        maxFile: 50
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




