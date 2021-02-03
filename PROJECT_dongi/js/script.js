const getButton = document.getElementById('get');
const multiInput = document.querySelector('multi-input'); 
const values = document.querySelector('#values'); 

getButton.onclick = () => {
  if (multiInput.getValues().length > 0) {
    values.textContent = `Got ${multiInput.getValues().join(' and ')}!`;
  } else {
    values.textContent = 'Got noone  :`^(.'; 
  }
}

document.querySelector('input').focus();

$(function () {
  $("aks-file-upload").aksFileUpload({
    fileUpload: "#uploadfile",
    dragDrop: true,
    maxSize: "90 GB",
    multiple: true,
    maxFile: 50
  });
});



$('#datepicker0').pDatepicker();
$('#datepicker1').pDatepicker();
$('#datepicker2').pDatepicker();


