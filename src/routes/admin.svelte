<script>
      import 'papercss/dist/paper.min.css'
      import {Collapsible, Table, Input, Modal, Button, Select, Checkbox, Tabs, Tab} from 'spaper';
      
      import { initializeApp, getApps, getApp } from "firebase/app";
      import { getFirestore, collection, query, where, onSnapshot, addDoc } from "firebase/firestore";
      import { firebaseConfig } from "$lib/firebaseConfig";
      import { browser } from "$app/env";
      import Listing from './_propListing.svelte'

      const firebaseApp = browser && (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
      const db = browser && getFirestore();

      console.log({firebaseApp, db});

      const colRef = browser && collection(db, "posts");

      let data = [];

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

      let propTitle = "..."
      let propKeterangan = "..."
      let propHarga = 1
      let propSatuan = "Milyar"
      let propKategori = "..."
      let propHotList = false

      const submitForm = async () => {
          const docRef = await addDoc(colRef, {
              title: propTitle,
              deskripsi: propKeterangan,
              harga: propHarga,
              satuan: propSatuan,
              kategori: propKategori,
              hotlist: propHotList
          });
          //console.log(docRef.id);
       }

       const columns1 = [
          {
            field: 'id',
            label: 'Id',
            content: (code) => `<Button type="danger" on:click={deleteForm}>delete</Button>`,
            html: true,
          },
          { field: 'title', label: 'Title' },
          { field: 'deskripsi', label: 'Deskripsi' },
        ];

        const deleteForm = async () => {
          console.log("deleteFormk")
        }
</script>

<div class="paper container-md">
      <div class="form-group">
        <div class="row flex-left">
          <div class="sm-12 md-12 lg-12 col">
            <Input label="Judul" placeholder="***" bind:value={propTitle} block/>
          </div>
          <div class="sm-12 md-12 lg-12 col">
            <Input rows="8" type="textarea" placeholder="..." bind:value={propKeterangan} block/>
          </div>
            <div class="sm-2 md-2 lg-2 col">
              <Input label="Harga" bind:value={propHarga}/>
            </div>
            <div class="sm-2 md-2 lg-2 col">
              <Select label="Satuan" bind:value={propSatuan}>
                <option value="Juta">Juta</option>
                <option value="Milyar">Milyar</option>
              </Select>
            </div>
            <div class="sm-2 md-2 lg-2 col">
              <Select label="Hotlist" bind:value={propHotList}>
                <option value=true>true</option>
                <option value=false>false</option>
              </Select>
            </div>
            <div class="sm-5 md-5 lg-5 col">
              <Select label="Kategori" bind:value={propKategori}>
                <p>Kategori</p>
                <option value="Apartment">Apartment</option>
                <option value="Rumah">Rumah</option>
                <option value="Ruko, Komersial, Gudang">Ruko, Komersial, Gudang</option>
                <option value="Tanah">Tanah</option>
              </Select>         
            </div>
            <div class="sm-7 md-7 lg-7 col">
              <Button type="secondary" on:click={submitForm}>Submit</Button>
            </div>
        </div>  
          
        
      </div>
    </div>

    <div class="paper container-lg">  
      <div class="row">
        {#each data as item}
          <div class="sm-5 md-4 lg-3 col">
            <Listing cardTitle={item.title} 
                          cardKeterangan={item.deskripsi} 
                          cardKategori={item.kategori} 
                          cardHarga={item.harga}
                          cardSatuan={item.satuan}
                          cardHotList={item.hotList}
                          web={'./propBlog/' + item.id}/>
          </div>
        {/each}
      </div>  
    </div>

    <div class="paper container-lg">  
      <Table columns={['title', 'deskripsi', 'harga', 'satuan', 'kategori', 'hotlist']}  {data} hoverable/>
    </div>
