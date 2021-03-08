
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

function separateNum(value, input) {
    /* seprate number input 3 number */
    var nStr = value + '';
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    if (input !== undefined) {

        input.value = x1 + x2;
    } else {
        return x1 + x2;
    }
}




