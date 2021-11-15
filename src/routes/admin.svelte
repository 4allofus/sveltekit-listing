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

  <Button on:click={() => showModal = true}>
    Show
  </Button>
  <Modal bind:active={showModal}
         title="Modal Title">
    <p>Hey!</p>
    <p>Here is the modal content</p>
  </Modal>

  <Table {data} hoverable/>
</div>  
