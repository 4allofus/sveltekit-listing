<script context="module">

  export const load = async ({  }) =>{
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWoZVhsZoSFSNG_fcyioe3ef5kzeuuqPE&callback=initMap&v=weekly"
        const ready = true;
      return{
        props: {
          ready
        },
      };
    };
</script>

<script>
    export let ready; 
    import 'papercss/dist/paper.min.css'
    import { mapConfig } from "$lib/firebaseConfig";
    import Map from './map.svelte';
</script>

<div class="paper container-lg">
  {#if ready}
  <Map/>
  {/if}
</div>
