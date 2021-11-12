<script>
      import 'papercss/dist/paper.min.css'
      import {Collapsible, Table, Input} from 'spaper';
      import 'papercss/dist/paper.min.css'

      //import {Table} from 'spaper';

      let title = "";
      let harga = 0;
      let satuan = '';
      let detil = '';
      let kategori = '';

      let data = [
        { title: 'Rumah pik', harga: 5, satuan: 'M', 
          detil: 'Jalan besar, hook', kategori: 'rumah' },
        { title: 'Apartmen pik', harga: 700, satuan: 'Jt', 
          detil: 'Lantai 7 view laut', kategori: 'apartmen' },
        
      ];
</script>


<div class="paper container-lg">  

  <Collapsible label="Add New Listing">
    
      <div class="form-group">
        <Input value="Block level" block />
      </div>
      Listing : {title}
    
  </Collapsible>
  <Table {data} hoverable/>
</div>  
