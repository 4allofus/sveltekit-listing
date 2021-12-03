<script>
      export let propTitle = "...";
      export let propKeterangan = "...";
      export let propHarga = 1;
      export let propSatuan = "Milyar";
      export let propKategori = "...";
      export let propHotlist = false;
      export let propImage = "https://firebasestorage.googleapis.com/v0/b/allofussvelte.appspot.com/o/30%_.jpg"
      export let web = "empty";
      export let propId;
      export let delProp;
      export let isSignedIn = false;
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

      {#if isSignedIn === true}
        
        <button><a sveltekit:prefetch href={web}>Edit</a></button>
        <button on:click={delProp(propId)}>Delete</button>
       {/if}
    </div>
</div>