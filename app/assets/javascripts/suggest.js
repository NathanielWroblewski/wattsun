$(document).ready(function(){
  if ($('#address').length > 0) {
    $("#address").suggest({filter:'(all type:/location)'});
  }
});
