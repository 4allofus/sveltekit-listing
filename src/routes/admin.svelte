<script>
      import 'papercss/dist/paper.min.css'
      import { Collapsible, Table } from 'spaper';

      const supplies = [
		    { id: '1', title: 'Rumah pik murah', harga: '5', satuan: 'M', detil: 'Jl Camar 5 no 32', kategori: 'rumah' },
		    { id: '2', title: 'Rumah pik murah', harga: '5', satuan: 'M', detil: 'Jl Camar 5 no 32', kategori: 'rumah' }
	    ];
</script>


<div class="paper container-lg">  

  <Collapsible label="Add New Listing">Collapsible : Add New Listing</Collapsible>
  <Table {supplies}/>
</div>  
