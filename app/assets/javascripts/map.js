$(document).ready(function(){
  // create a map in the "map" div, set the view to a given place and zoom
  var latitude  = $('#map').data('lat');
  var longitude = $('#map').data('long');

  var map = L.map('map').setView([latitude, longitude], 13);

  // add an OpenStreetMap tile layer
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">  OpenStreetMap</a> contributors'
  }).addTo(map);

  // add a marker in the given location, attach some popup content to it   and open the popup

  L.marker([latitude, longitude]).addTo(map)
      .bindPopup('Your house.')
      .openPopup();

  L.tileLayer('http://{s}.tile.cloudmade.  com/26d0b59d4044441e8bb7ebecb61a875f/997/256/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">  OpenStreetMap</a> contributors, <a href="http://creativecommons.  org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://  cloudmade.com">CloudMade</a>',
      maxZoom: 18
  }).addTo(map);
});
