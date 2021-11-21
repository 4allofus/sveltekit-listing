<script>
    import 'papercss/dist/paper.min.css'

    let data = [];

    let propTitle = "..."
    let propKeterangan = "..."
    let propHarga = 1
    let propSatuan = "Milyar"
    let propKategori = "..."
    let propHotList = false

    const submitForm = async () => {
        /* const docRef = await addDoc(colRef, {
            title: propTitle,
            deskripsi: propKeterangan,
            harga: propHarga,
            satuan: propSatuan,
            kategori: propKategori,
            hotlist: propHotList
        }); */
        console.log("SubmitForm");
     }

      const deleteForm = async () => {
        console.log("deleteForm")
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

