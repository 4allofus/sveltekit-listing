<script>
      import 'papercss/dist/paper.min.css'
      import {Collapsible, Table, Input, Modal, Button} from 'spaper';
      import 'papercss/dist/paper.min.css'

      let showModal = false;

      let judul = "";

      let data = [
        { title: 'Rumah pik', harga: 5, satuan: 'M', 
          detil: 'Jalan besar, hook', kategori: 'rumah' },
        { title: 'Apartmen pik', harga: 700, satuan: 'Jt', 
          detil: 'Lantai 7 view laut', kategori: 'apartmen' },
        
      ];

      let propTitle = "Judul"
      let propKeterangan = "Keterangan"
      let propHarga = "Harga"
      let propSatuan = "Satuan"
      let propKategori = "Kategori"

      let kategori = [
		    'Apartment',
		    'Rumah',
		    'Ruko, Komersial, Gudang',
        'Tanah'
	    ];

</script>

<div class="paper container-lg">  
  <div class="row flex-center">
    <div class="sm-12 col">
      <Button on:click={() => showModal = true}>
        Add Property
      </Button>
      <Modal bind:active={showModal} title="Add Property">
        <div class="form-group">

          <div class="row">
            <div class="col sm-12">
              <label for="paperInputs2">{propTitle}}</label>
              <input class="input-block" type="text" placeholder="Masukkan Judul" bing:value={propTitle}>
            </div>
      
            <div>
            <label for="large-input">{propKeterangan}}</label>
            <textarea id="large-input" placeholder="Keterangan" bind:value={propKeterangan}></textarea>
            </div>

            <div>
            <label for="paperInputs2">{propHarga}</label>
            <input class="input-block" type="text" placeholder="Masukkan Harga" bind:value={propHarga}>
            </div>

            <div>
            <label for="paperSelects1">{propSatuan}</label>
            <select bind:group={propSatuan}>
              <option value={Jt}>Juta</option>
              <option value={M}>Milliar</option>
            </select>
            </div>

            <div>
              {#each kategori as kategoriType}
              <label>
                <input type=checkbox bind:group={propKategori} value={kategoriType}>
                {kategoriType}
              </label>
            {/each}
            </div>

          </div>
      </div>
      </Modal>
    </div>
  </div>
</div>  

<div class="paper container-lg">  

  <Table {data} hoverable/>
</div>  
