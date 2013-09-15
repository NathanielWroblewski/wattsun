$(document).ready(function(){
  if ($('#address').length > 0) {
    $("#address").suggest({ key: 'AIzaSyA5UiGrefmQJrDpCG7ZnIaVZP0ASpIf9FU', filter:'(all type:/location/location)'});
  }
});
