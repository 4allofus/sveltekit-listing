<script context="module">
  export const load = async ({ fetch }) =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return{
      props: {
        posts
      },
    };
  };

</script>

<script>
    //untuk posts
    import 'papercss/dist/paper.min.css'
    import Listing from './_listing.svelte'
    import { Alert, Button } from 'spaper';
    import Typewriter from './Typewriter.svelte'

    export let posts;

    import { paginate, LightPaginationNav } from 'svelte-paginate'
    
    let items = posts
    let currentPage = 1
    let pageSize = 12

    //untuk search
    let searchWord = "";
    
    function searchFunction(){
      items = items.filter((post) => {
        return post.title.includes(searchWord) || post.body.includes(searchWord);
      });
    }
    
    //$: console.log(items)

    //ready to paginate
    $: paginatedItems = paginate({ items, pageSize, currentPage })

</script>

<div class="paper container-lg">
    <h2>Listing bank, tempat investasi property</h2>
    <Typewriter loop>
        <h3>Bawah NJOP</h3>
        <h3>Property murah</h3>
        <h3>Harga Covid</h3>
    </Typewriter>
</div>

<div class="paper container-md">
    <div class="row flex-spaces">
    <div class="form-group">
        <label for="paperInputs1">Kata kunci {searchWord}</label>
        <input type="text" placeholder="misal : ruko" bind:value={searchWord}/>
      </div>

      <div class="form-group">
        <label for="paperSelects1">Daerah</label>
        <select id="paperSelects1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      <div class="form-group">
        <label for="paperSelects1">Harga</label>
        <select id="paperSelects1">
          <option value="1">Bawah 1 M</option>
          <option value="2">Bawah 3 M</option>
          <option value="3">Bawah 5 M</option>
          <option value="4">Bawah 10 M</option>
          <option value="5">Diatas 10 M</option>
        </select>
      </div>

      <fieldset class="form-group">
        <legend>Some Check Boxes</legend>
        <label for="paperChecks1" class="paper-check">
          <input type="checkbox" name="paperChecks" id="paperChecks1" value="option 1"> <span>This is the first check</span>
        </label>
        <label for="paperChecks2" class="paper-check">
          <input type="checkbox" name="paperChecks" id="paperChecks2" value="option 2"> <span>This is the second check</span>
        </label>
      </fieldset>

      <Button on:click={searchFunction}>Cari</Button>
    </div>
</div>

<div class="paper container-lg">
    <div class="row">
        {#if paginatedItems.length}
          {#each paginatedItems as item}
          <div class="sm-6 md-4 lg-3 col">
            <Listing title={item.title} subtitle={item.title} body={item.body} web={'./blog/' + item.id}/>
          </div>
          {/each}
        {:else}
          <Alert type="danger">No data for : <i>{searchWord}</i></Alert>
        {/if}
    </div>

    <LightPaginationNav
      totalItems="{items.length}"
      pageSize="{pageSize}"
      currentPage="{currentPage}"
      limit="{1}"
      showStepOptions="{true}"
      on:setPage="{(e) => currentPage = e.detail.page}"
    />
</div>