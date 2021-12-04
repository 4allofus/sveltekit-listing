<script>
   let container;
   let map;
   let zoom = 8;
   let center = {lat: -34.397, lng: 150.644};
   
   import { onMount } from 'svelte';
   
   /* onMount(async () => {
       map = new google.maps.Map(container, {
           zoom,
           center,
       });
   }); */

    map = new google.maps.Map(container, {
        zoom,
        center,
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