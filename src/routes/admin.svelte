<script>
      import 'papercss/dist/paper.min.css'
      import {Collapsible} from 'spaper';
      import {Table} from 'spaper';

      let data = [
        { no: 1, title: 'Rumah pik', harga: 5, satuan: 'M', 
          detil: 'Jalan besar, hook', kategori: 'rumah' },
        { no: 2, title: 'Rumah pik', harga: 5, satuan: 'M', 
          detil: 'Jalan besar, hook', kategori: 'rumah' },
        
      ];
</script>


<div class="paper container-lg">  

  <Collapsible label="Add New Listing">Collapsible : Add New Listing</Collapsible>
  <Table {data} hoverable/>
</div>  
