<script>
   let container;
   let map;
   let zoom = 8;
   let center = {lat: -34.397, lng: 150.644};

   import { Loader } from "@googlemaps/js-api-loader"
   import { mapConfig } from "$lib/firebaseConfig";

   
   const loader = new Loader({
    apiKey: mapConfig,
    version: "weekly",
    });

    loader.load().then(() => {
        map = new google.maps.Map(container, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
    });

</script>

<style>
.full-screen {
   width: 100vw;
   height: 100vh;
}
</style>

<h1>map called</h1>
<div class="full-screen" bind:this={container}></div>