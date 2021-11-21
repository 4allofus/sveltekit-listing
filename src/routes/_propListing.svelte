<script>
      export let propTitle = "...";
      export let propKeterangan = "...";
      export let propHarga = 1;
      export let propSatuan = "Milyar";
      export let propKategori = "...";
      export let propHotList = false;
      export let propImage = "http://kioskarikatur.files.wordpress.com/2009/02/diskon-30.jpg"
      export let web = "empty";
</script>

<div class="card">
    <img src="https://picsum.photos/768" alt="Card example image">
  
    <div class="card-body">
        {#if propHotlist === true}
            <h4 class="card-title">🔥🔥🔥{propTitle}🔥🔥🔥</h4>
        {:else}
            <h4 class="card-title">{propTitle}</h4>
        {/if}

      <h5 class="card-subtitle">{propHarga} {propSatuan}</h5>
      <p class="card-text">{propKategori}</p>
      <p class="card-text">{propKeterangan.substr(0,64)}</p>
      <button><a sveltekit:prefetch href={web}>Info</a></button>
    </div>
</div>