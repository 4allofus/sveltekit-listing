<script>
    import { isSignedIn }  from "$lib/adminStore";

      export let propTitle = "...";
      export let propKeterangan = "...";
      export let propHarga = 1;
      export let propSatuan = "Milyar";
      export let propKategori = "...";
      export let propHotlist = false;
      export let propImage = "https://firebasestorage.googleapis.com/v0/b/allofussvelte.appspot.com/o/30%25_.jpg?alt=media&token=5f5430fe-a6d3-4db7-8400-f2e478aa055a"
      export let web = "empty";
      export let propId;
      export let delProp;
</script>

<div class="card">
    <img src={propImage} alt="Card example image">
  
    <div class="card-body">
        {#if propHotlist}
            <h4 class="card-title">🔥{propTitle}🔥</h4>
        {:else}
            <h4 class="card-title">{propTitle}</h4>
        {/if}

      <h5 class="card-subtitle">{propHarga} {propSatuan}</h5>
      <p class="card-text">{propKategori}</p>
      <p class="card-text">{propKeterangan}</p>

      {#if isSignedIn}
        <button><a sveltekit:prefetch href={web}>Edit</a></button>
        <button on:click={delProp(propId)}>Delete</button>
       {/if}
    </div>
</div>