<script>
      import 'papercss/dist/paper.min.css'
      import {Collapsible, Table, Input, Modal, Button, Select, Checkbox, Tabs, Tab} from 'spaper';
      
      import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
      
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
        
        const provider = new GoogleAuthProvider();;
        const auth = getAuth();
          signInWithPopup(auth, provider)
            .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              console.log(user);
            }).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
          });

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
