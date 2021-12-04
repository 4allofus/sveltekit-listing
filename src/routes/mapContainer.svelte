<script defer async
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWoZVhsZoSFSNG_fcyioe3ef5kzeuuqPE&callback=initMap&v=weekly">
    import 'papercss/dist/paper.min.css'
    import { Alert, Button, Input } from 'spaper';
    import { mapConfig } from "$lib/firebaseConfig";
    import Map from './Map.svelte';

</script>


<div class="paper container-lg">
  <Map/>
  </div>
