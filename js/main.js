function initMap() {

  var here = {lat: 40.8054491, lng: -73.9654415};

  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: here});

  var marker = new google.maps.Marker({position: here, map: map});
}