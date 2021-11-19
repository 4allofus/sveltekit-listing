<script>
      import 'papercss/dist/paper.min.css'
      import {Collapsible, Table, Input, Modal, Button, Select, Checkbox, Tabs, Tab} from 'spaper';
      
      import { initializeApp, getApps, getApp } from "firebase/app";
      import { getFirestore, collection, query, where, onSnapshot, addDoc } from "firebase/firestore";
      import { firebaseConfig } from "$lib/firebaseConfig";
      import { browser } from "$app/env";

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
          console.log(docRef.id);
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
            <div class="sm-3 md-3 lg-3 col">
              <Input label="Harga" bind:value={propHarga}/>
            </div>
            <div class="sm-3 md-3 lg-3 col">
              <Select label="Satuan" bind:value={propSatuan}>
                <option value="Juta">Juta</option>
                <option value="Milyar">Milyar</option>
              </Select>
            </div>
            <div class="sm-3 md-3 lg-3 col">
              <Select label="Hotlist" bind:value={propHotList}>
                <option value=true>true</option>
                <option value=false>false</option>
              </Select>
            </div>
            <div class="sm-12 md-12 lg-12 col">
              <fieldset class="form-group">
                <p>Kategori</p>
                <Checkbox label="Apartment" value="Apartment"
                          bind:group={propKategori} />
                <Checkbox label="Rumah" value="Rumah"
                          bind:group={propKategori} />
                <Checkbox label="Ruko, Komersial, Gudang" value="Ruko, Komersial, Gudang"
                          bind:group={propKategori} />
                <Checkbox label="Tanah" value="Tanah"
                          bind:group={propKategori} />
              </fieldset>         
            </div>
            <div class="sm-3 md-3 lg-3 col">
              <Button type="secondary" on:click={submitForm}>Submit</Button>
            </div>
        </div>  
          
        
      </div>
    </div>

    <div class="paper container-lg">  
      {#each data as propData }
      <div class="row flex-left">
        <div class="sm-3 md-3 lg-3 col">
          {propData.title}
        </div>
        <div class="sm-5 md-5 lg-5 col">
          {propData.deskripsi}
        </div>  
        <div class="sm-1 md-1 lg-1 col">
          {propData.harga}
        </div>  
        <div class="sm-1 md-1 lg-1 col">
          {propData.satuan}
        </div>  
        <div class="sm-2 md-2 lg-2 col">
          {propData.kategori}
        </div>  
      </div>
      {/each}
    </div>  

    <div class="paper container-lg">  
      <Table columns={['title', 'deskripsi', 'harga', 'satuan', 'kategori', 'hotlist']}  {data} hoverable/>
    </div>  

