<script>
   let container;
   let map;
   let zoom = 8;
   let center = {lat: -34.397, lng: 150.644};

   import { mapConfig, isReady} from "$lib/firebaseConfig";
   import { browser } from "$app/env";
   import { Reset } from 'styled-reset'

   let loader;

   try{
    console.log("enter loader");
    loader = new google.maps.plugins.loader.Loader({
    apiKey: mapConfig,
    version: "weekly",
    });
    } catch(e){
        console.log(e.message);
    }
    /* loader.load().then(() => {
        map = browser &&  new google.maps.Map(container, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    });*/
    
    if(loader != null){
        console.log("enter google maps");
        browser && loader.load().then(() => {
            map = new google.maps.Map(container, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
            console.log("enter container");
            isReady.update(isReady => true);
        })
        .catch(e => {
            console.log("catch - error");
        });
    }
</script>

<style>
.full-screen {
   width: 100vw;
   height: 100vh;
}
</style>

<div class="paper container-lg">
    <Reset />
    <div class="full-screen" bind:this={container}></div>
</div>