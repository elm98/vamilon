
var i=1;
$(".addrow").click(function(){
    i++;

    $(".tab-content").css('height','auto');

    $('#addrow').before('<div class="card card-dashboard">\n' +
        '                            <div class="min-width text-center">\n' +
        '                                <div class="header-list  d-flex   px-4  justify-content-between bg-primary  text-light">\n' +
        '\n' +
        '\n' +
        '                                    <div>\n' +
        '                                        <strong>\n' +
        '                                            عنوان دوره                                       </strong>\n' +
        '                                    </div>\n' +
        '\n' +
        '                                </div>\n' +
        '\n' +
        '                                <div class="header-list d-flex">\n' +
        '                                    <div class="col-12  d-flex  justify-content-between">\n' +
        '                                        <div class="text-success">\n' +
        '                                            قرعه کشی دوره اول                                      </div>\n' +
        '                                        <div class="text-danger   delete">              <i class="fas fa-trash r"></i> حذف قرعه کشی</div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <div class="d-flex   justify-content-center">\n' +
        '\n' +
        '\n' +
        '                                    <div class="col-xs-6 col-sm-6 col-lg-5 m-auto">\n' +
        '                                        <div class="row with-title col col-12 p-0 mr-0 ml-0 mb-1 mt-1" data-unique-id="select_date_of_lot_fund_2633_loan_1" onchange="dateSelector(this)">\n' +
        '\n' +
        '                                            <label for="select_winner_of_lot_fund_2633_loan_1"> تاریخ قرعه کشی </label>\n' +
        '                                            <input type="text" class="form-control mr-2 text-dark text-center    pwt-datepicker-input-element"   id="datepicker'+i+'" >\n' +
        '                                        </div>\n' +
        '\n' +
        '                                    </div>\n' +
        '                                    <div class="col-xs-6 col-sm-6 col-lg-3 m-auto">\n' +
        '\n' +
        '                                        <label for="select_winner_of_lot_fund_2633_loan_1">برنده وام</label>\n' +
        '                                        <select class="select2-rtl form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">\n' +
        '                                            <optgroup label="برنده وام">\n' +
        '                                                <option value="0" selected="">\n' +
        '                                                    برنده وام را انتخاب کنید\n' +
        '                                                </option>\n' +
        '                                                <option value="258">\n' +
        '                                                    عباس گودرزی                                                            </option>\n' +
        '                                                <option value="6359">\n' +
        '                                                    سیروس جعفری                                                            </option>\n' +
        '                                                <option value="6929">\n' +
        '                                                    فهیمه احمدی                                                            </option>\n' +
        '                                            </optgroup>\n' +
        '                                        </select>\n' +
        '\n' +
        '                                    </div>\n' +
        '\n' +
        '                                </div>\n' +
        '\n' +
        '\n' +
        '                            </div>\n' +
        '                        </div>');

    $('#datepicker'+i).pDatepicker({
        "format": "L",
        "timePicker": {
            "enabled": false,
        }
    });
    $(".delete").click(function(){

        $(this).closest('.card-dashboard').remove();
    });
});


$(document).ready(function() {
    $(".delete").click(function(){

        $(this).closest('.card-dashboard').remove();
    });
});

$(document).ready(function() {

    $('#smartwizard').smartWizard();
    $('.sw-btn-next').text("بعدی");
    $('.sw-btn-prev').text("قبلی");

});

$('.datepicker0').pDatepicker({
    "format": "L",
    "timePicker": {
        "enabled": false,
    }
});



$(document).ready(function(){


    $(".sw-btn-prev").on("click", function() {

        if($('#step-3').css('display')=='none')
        {
            $('.sw-btn-next').text("بعدی");
            $('.sw-btn-prev').text("قبلی");


        }


    });

    $(".sw-btn-next").on("click", function() {

        if($('#step-3').css('display')=='block')
        {
            $('.sw-btn-next').removeClass("disabled");
            $('.sw-btn-next').text("ذخیره اطلاعات");
            $('.sw-btn-prev').addClass("disabled");
        }



    });
});

