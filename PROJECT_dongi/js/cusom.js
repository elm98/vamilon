
$(function () {
    $("aks-file-upload").aksFileUpload({
        fileUpload: "#uploadfile",
        dragDrop: true,
        maxSize: "90 GB",
        multiple: true,
        maxFile: 50
    });
});

$( document ).ready(function() {
    $('#datepicker0').pDatepicker();
    $('#datepicker1').pDatepicker();
    $('#datepicker2').pDatepicker();
});




