<script>
      import 'papercss/dist/paper.min.css'
      import {Collapsible, Table, Input, Modal, Button, Select, Checkbox, Tabs, Tab} from 'spaper';
      
      import { getAuth, onAuthStateChanged } from "firebase/auth";
      
      import { initializeApp, getApps, getApp } from "firebase/app";
      import { getFirestore, collection, 
        query, where, onSnapshot, 
        addDoc, doc, deleteDoc } from "firebase/firestore";
        import { firebaseConfig } from "$lib/firebaseConfig";
        import { browser } from "$app/env";
        
        import Listing from './_propListing.svelte'
        import AddProp from './_addProp.svelte'
        
        const firebaseApp = browser && (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
        const db = browser && getFirestore();
        
        const colRef = browser && collection(db, "posts");
        
        let data = [];
        let isAdmin = true;
        
        const auth = getAuth();
        const user = auth.currentUser;

        if (user != nll) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // ...
          console.log(user.uid)
          isAdmin = true;
        } else {
          // No user is signed in.
          console.log("user signed out")
          isAdmin = false;
        }

      const unsubscribe = 
        browser &&
        onSnapshot(colRef, (querySnapshot) => {
          let fbTodos = [];
          querySnapshot.forEach((doc) => {
            let todo = {...doc.data(), id: doc.id};
            fbTodos = [todo, ...fbTodos];
          });
          console.table(fbTodos);
          data = fbTodos;
        });

      const delProp = async (no) => {
          console.log("delProp" + no)
          await deleteDoc(doc(db, "posts", no));
      }

</script>

{#if isAdmin}
    <div class="paper continer-lg">
	      <AddProp/>
    </div>
{/if}

  
<div class="paper container-lg">  
      <div class="row">
        {#each data as item}
          <div class="sm-5 md-4 lg-3 col">
            <Listing propTitle={item.title} 
                          propKeterangan={item.deskripsi} 
                          propKategori={item.kategori} 
                          propHarga={item.harga}
                          propSatuan={item.satuan}
                          propHotlist={item.hotlist}
                          web={'./propBlog/' + item.id}
                          propId={item.id}
                          delProp={delProp}/>
          </div>
        {/each}
      </div>  
    </div>

    <div class="paper container-lg">  
      <Table columns={['title', 'deskripsi', 'harga', 'satuan', 'kategori', 'hotlist']}  {data} hoverable/>
    </div>
