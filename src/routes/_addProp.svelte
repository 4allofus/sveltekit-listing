<script>
    import 'papercss/dist/paper.min.css'
    import {Collapsible, Table, Input, Modal, Button, Select, Checkbox, Tabs, Tab} from 'spaper';

    import { getFirestore, collection, 
              query, where, onSnapshot, 
              addDoc, doc, deleteDoc } from "firebase/firestore";

    import { getStorage, ref, uploadBytes} from "firebase/storage";

    export let colRef;
    export let currFirebaseApp;

    let propTitle = ""
    let propKeterangan = ""
    let propHarga = 0
    let propSatuan = "Milyar"
    let propKategori = ""
    let propHotList = false;
    let input;

    const submitForm = async () => {
      const file = input.files[0];
      const storage = getStorage(currFirebaseApp);
      const fileRef = ref(storage, file);
      console.log(fileRef.name);
      console.log(fileRef.fullPath);
      console.log(fileRef);
      
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      if(propHarga > 0 && colRef != null){
            uploadBytes(fileRef, reader).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });

            await addDoc(colRef, {


                title: propTitle,
                deskripsi: propKeterangan,
                harga: propHarga,
                satuan: propSatuan,
                kategori: propKategori,
                hotlist: propHotList
            }); 
        }

        propTitle = ""
        propKeterangan = ""
        propHarga = 0
        propSatuan = "Milyar"
        propKategori = ""
        propHotList = false
      
        //console.log("SubmitForm");
     }

</script>

<div class="paper container-md">
    <div class="form-group">
      <div class="row flex-left">
        <div class="sm-12 md-12 lg-12 col">
          <Input label="Judul"  bind:value={propTitle} block/>
        </div>
        <div class="sm-12 md-12 lg-12 col">
          <Input rows="8" type="textarea" bind:value={propKeterangan} block/>
        </div>
          <div class="col-fill col">
            <input type=number label="Harga" bind:value={propHarga} min=0 max=1000>
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
            <input type="file" bind:this={input}>
          </div>
          <div class="sm-7 md-7 lg-7 col">
            <Button type="secondary" on:click={submitForm}>Submit</Button>
          </div>
      </div>  
        
    </div>
  </div>

