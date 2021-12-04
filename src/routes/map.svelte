<script src="https://unpkg.com/@googlemaps/js-api-loader@1.0.0/dist/index.min.js">
   let container;
   let map;
   let zoom = 8;
   let center = {lat: -34.397, lng: 150.644};

   import { mapConfig, isReady} from "$lib/firebaseConfig";
   import { browser } from "$app/env";

    console.log("enter loader");
   const loader = browser && new google.maps.plugins.loader.Loader({
    apiKey: "AIzaSyBWoZVhsZoSFSNG_fcyioe3ef5kzeuuqPE",
    version: "weekly",
    });
    console.log("enter google maps");
    /* loader.load().then(() => {
        map = browser &&  new google.maps.Map(container, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
    });*/

    browser && loader.load().then(() => {
        map = browser && new google.maps.Map(container, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
        console.log("enter container");
        isReady.update(isReady => true);
    })
    .catch(e => {
        console.log("catch - error");
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