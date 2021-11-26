<script>
  //untuk posts
  import 'papercss/dist/paper.min.css'

  import { Alert, Button } from 'spaper';

  import { initializeApp, getApps, getApp } from "firebase/app";
    import { getFirestore, collection, 
      query, where, onSnapshot, 
      addDoc, doc, deleteDoc } from "firebase/firestore";
      import { firebaseConfig, isSignedIn } from "$lib/firebaseConfig";
      import { browser } from "$app/env";
      
  import Listing from './_propListing.svelte';
  import Typewriter from './Typewriter.svelte'

  import { paginate, LightPaginationNav } from 'svelte-paginate'
  import AddProp from './_addProp.svelte';

  
  const firebaseApp = browser && (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
  const db = browser && getFirestore(firebaseApp);
  const colRef = browser && collection(db, "posts");
  let posts = [];

  const unsubscribe = 
      browser &&
      onSnapshot(colRef, (querySnapshot) => {
        let fbTodos = [];
        querySnapshot.forEach((doc) => {
          let todo = {...doc.data(), id: doc.id};
          fbTodos = [todo, ...fbTodos];
        });
        console.table(fbTodos);
        posts = fbTodos;
      });

  //let items = posts;
  let currentPage = 1;
  let pageSize = 12;

  //untuk search
  let searchWord = "";

  //writable store
  let isSignedIn_value = false;
  
  isSignedIn.subscribe(value => {
		isSignedIn_value = value;
    console.log(isSignedIn_value);
	});

  //search function
  function searchFunction(){
    items = posts.filter((post) => {
      return (post.kategori).toLowerCase().includes(searchWord.toLowerCase()) ||
            (post.title).toLowerCase().includes(searchWord.toLowerCase())|| 
            (post.deskripsi).toLowerCase().includes(searchWord.toLowerCase());
    });
  }
  
  $: items = posts.filter((post) => {
    return (post.kategori).toLowerCase().includes(searchWord.toLowerCase()) ||
            (post.title).toLowerCase().includes(searchWord.toLowerCase())|| 
            (post.deskripsi).toLowerCase().includes(searchWord.toLowerCase());
  });

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

{#if isSignedIn_value === true}
    <div class="paper continer-lg">
	      <AddProp colRef = {colRef}/>
    </div>
{/if}

<div class="paper container-md">
  <div class="row flex-spaces">
  <div class="form-group">
      <label for="paperInputs1">Kata kunci</label>
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
      {#if paginatedItems.length > 0}
        {#each paginatedItems as item}
        <div class="sm-5 md-4 lg-3 col">
          <Listing propTitle={item.title} 
                        propKeterangan={item.deskripsi} 
                        propKategori={item.kategori} 
                        propHarga={item.harga}
                        propSatuan={item.satuan}
                        propHotlist={item.hotlist}
                        web={'./propBlog/' + item.id}
                        propId={item.id}
                        />
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