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
</script>

<div class="paper container-lg">  
  <div class="row flex-center">
    <div class="sm-6 col">
      <Button on:click={() => showModal = true}>
        Add Property
      </Button>
      <Modal bind:active={showModal} title="Add Property">
        <div class="form-group">
          <div class="row">
            <div class="col sm-8">
              <label for="paperInputs2">Title</label>
              <input class="input-block" type="text" placeholder="Masukkan Judul">
            </div>
      
            <label for="large-input">Keterangan</label>
            <textarea id="large-input" placeholder="Keterangan"></textarea>
      
            <label for="paperInputs2">Harga</label>
            <input class="input-block" type="text" placeholder="Masukkan Harga">
      
            <label for="paperSelects1">Satuan</label>
            <select id="paperSelects1">
              <option value="Jt">Juta</option>
              <option value="M">Milliar</option>
            </select>
      
            <legend>Kategori</legend>
            <label for="paperChecks1" class="paper-check">
              <input type="checkbox" name="paperChecks" value="Rumah"> <span>Rumah</span>
            </label>
            <label for="paperChecks2" class="paper-check">
              <input type="checkbox" name="paperChecks" value="Komersial"> <span>Komersial</span>
            </label>
          </div>
      </div>
      </Modal>
    </div>
  </div>
</div>  

<div class="paper container-lg">  

  <Table {data} hoverable/>
</div>  
