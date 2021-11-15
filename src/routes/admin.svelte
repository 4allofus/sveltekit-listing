<script>
      import 'papercss/dist/paper.min.css'
      import {Collapsible, Table, Input, Modal, Button, Select, Checkbox} from 'spaper';
      
      import { initializeApp, getApps, getApp } from "firebase/app";
      import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
      import { firebaseConfig } from "$lib/firebaseConfig";
      import { browser } from "$app/env";

      const firebaseApp = browser && (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
      const db = browser && getFirestore();

      const colRef = collection(db, "posts");

      let propData = [];

      const unsubscribe = 
        browser &&
        onSnapshot(colRef, (querySnapshot) => {
          let fbTodos = [];
          querySnapshot.forEach((doc) => {
            let todo = {...doc.data(), id: doc.id};
            fbTodos = [todo, ...fbTodos];
          });
          console.table(fbTodos);
        })
      console.log({firebaseApp, db});

      let data = [
        { title: 'Rumah pik', harga: 5, satuan: 'M', 
        detil: 'Jalan besar, hook', kategori: 'rumah' },
        { title: 'Apartmen pik', harga: 700, satuan: 'Jt', 
        detil: 'Lantai 7 view laut', kategori: 'apartmen' },        
      ];
      
      let showModal = false;

      let propTitle = "Judul"
      let propKeterangan = "Keterangan"
      let propHarga = "Harga"
      let propSatuan = "Satuan"
      let propKategori = "Kategori"

</script>

<div class="paper container-lg">  
  <div class="row flex-center">
    <div class="sm-12 col">
      <Button on:click={() => showModal = true}>
        Add Property
      </Button>
      <Modal bind:active={showModal} title="Add Property">
        <div class="form-group">
          <Input label={propTitle} bind:value={propTitle} block/>
        </div>
      
        <div class="form-group">
          <Input type="textarea" placeholder="..." label={propKeterangan} bind:value={propKeterangan}/>
        </div>

        <div class="form-group">
          <Input label={propHarga} bind:value={propHarga}/>

          <Select label="Satuan" bind:value={propSatuan}>
            <option value="Jt">Jt</option>
            <option value="M">M</option>
          </Select>
        </div>

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
      </Modal>
    </div>
  </div>
</div>  

<div class="paper container-lg">  

  <Table {data} hoverable/>
</div>  
