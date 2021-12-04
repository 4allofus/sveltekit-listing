<script>
    import 'papercss/dist/paper.min.css'
    import { mapConfig, isReady } from "$lib/firebaseConfig";
    import Map from './map.svelte';

    let isReady_value = false;

    isReady.subscribe(value => {
		isReady_value = value;
    //console.log(isSignedIn_value);
	});
</script>

<div class="paper container-lg">
  {#if isReady_value === true}
    <h1>Map is ready</h1>
    <Map/>
  {/if}
</div>
