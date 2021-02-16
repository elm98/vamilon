$(document).ready(function() {
    var table = $('#example').DataTable({
        language: {
            paginate: {
                previous: "قبلی",
                next: "بعدی"
            },
            lengthMenu: "نمایش _MENU_ ",
            zeroRecords: "داده ای یافت نشد.",
            info: "",
            infoEmpty: "",
            infoFiltered: "",
            search: "جستجو"
        },
        order: [[ 0, "desc" ]]
    });



});