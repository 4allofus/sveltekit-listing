<script context="module">
    export const load = async ({ page }) =>{
        const id = page.params.id;
        console.log(page.params);

      return{
        props: {
          
        },
      };
    };
</script>

<script>
    import 'papercss/dist/paper.min.css'
    import {Collapsible, Table, Input, Modal, Button, Select, Checkbox, Tabs, Tab} from 'spaper';

    import { initializeApp, getApps, getApp } from "firebase/app";
    import { getFirestore, collection, 
              query, where, onSnapshot, 
              addDoc, doc, deleteDoc } from "firebase/firestore";
    import { firebaseConfig } from "$lib/firebaseConfig";
    import { browser } from "$app/env";

    const firebaseApp = browser && (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
    const db = browser && getFirestore();

    const colRef = browser && collection(db, "posts");
    const q = query(colRef, where("id", "==", id));

    console.log(q);

    let propTitle = id
    let propKeterangan = "..."
    let propHarga = 1
    let propSatuan = "Milyar"
    let propKategori = "..."
    let propHotList = false

    const updateForm = async () => {
        const docRef = await addDoc(colRef, {
            title: propTitle,
            deskripsi: propKeterangan,
            harga: propHarga,
            satuan: propSatuan,
            kategori: propKategori,
            hotlist: propHotList
        }); 
        console.log("updateForm");
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
        <div class="col-fill col">
          <input type=number laberl="Harga" bind:value={propHarga} min=0 max=1000>
        </div>
        <div class="col-fill col">
          <Select label="Satuan" bind:value={propSatuan}>
            <option value="Juta">Juta</option>
            <option value="Milyar">Milyar</option>
          </Select>
        </div>
        <div class="col-fill col">
          <Checkbox label="hotlist?" value="hotlist ?"
          bind:checked={propHotList} />
        </div>
        <div class="col-fill col">
          <Select label="Kategori" bind:value={propKategori}>
            <p>Kategori</p>
            <option value="Apartment">Apartment</option>
            <option value="Rumah">Rumah</option>
            <option value="Ruko, Komersial, Gudang">Ruko, Komersial, Gudang</option>
            <option value="Tanah">Tanah</option>
          </Select>         
        </div>
          <div class="sm-7 md-7 lg-7 col">
            <Button type="secondary" on:click={updateForm}>Update</Button>
          </div>
      </div>  
        
      
    </div>
  </div>

