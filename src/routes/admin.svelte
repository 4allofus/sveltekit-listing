<script>
      import 'papercss/dist/paper.min.css'
      import {Collapsible, Table, Input, Modal, Button, Select, Checkbox, Tabs, Tab} from 'spaper';
      
      import { initializeApp, getApps, getApp } from "firebase/app";
      import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
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

      let propTitle = "Judul"
      let propKeterangan = "Keterangan"
      let propHarga = "Harga"
      let propSatuan = "Milyar"
      let propKategori = "Kategori"

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
            <div class="sm-12 md-12 lg-12 col">
              <fieldset class="form-group">
                <p>Kategori</p>
                <Checkbox label="Hot List" value="Hot List"
                          bind:group={propKategori} />
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
        </div>  
          
        
      </div>
    </div>

    <div class="paper container-lg">  
      {#each data as propData }
        <li>{propData.}</li>
      {/each}
    </div>  

    <div class="paper container-lg">  
      <Table {propData} hoverable/>
    </div>  

