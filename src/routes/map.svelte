<script defer async
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWoZVhsZoSFSNG_fcyioe3ef5kzeuuqPE&callback=initMap&v=weekly">
    import 'papercss/dist/paper.min.css'
    import { Alert, Button, Input } from 'spaper';
    import { mapConfig } from "$lib/firebaseConfig";

    function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}
</script>


<div class="paper container-lg">
  <div id="map"></div>
  </div>

  <style>
    #map {
  height: 400px;
  /* The height is 400 pixels */
  width: 100%;
  /* The width is the width of the web page */
}
  </style>