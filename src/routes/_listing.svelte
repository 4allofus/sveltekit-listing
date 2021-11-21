<script>
  		export let title = "empty";
		  export let subtitle = "empty";
      export let body = "empty";
      export let web = "empty";
</script>

<div class="card">
    <img src="https://picsum.photos/768" alt="image here">
  
    <div class="card-body">
      <h4 class="card-title">{title.substr(0,20)}</h4>
      <h5 class="card-subtitle">{subtitle.substr(0,20)}</h5>
      <p class="card-text">{body.substr(0,30)}</p>
      <button><a sveltekit:prefetch href={web}>Info</a></button>
    </div>
</div>