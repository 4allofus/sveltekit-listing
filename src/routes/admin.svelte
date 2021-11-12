<script>
      import 'papercss/dist/paper.min.css'
      import {Collapsible} from 'spaper';
      import {Table} from 'spaper';

      let supplies = [
		    { id: 1, title: 'Rumah pik murah', harga: 5, satuan: 'M', detil: 'Jl Camar 5 no 32', kategori: 'rumah' },
		    { id: 2, title: 'Apartment murah', harga: 700, satuan: 'Jt', detil: 'Jl Camar 5 no 32', kategori: 'apartmen' },
	    ];

</script>


<div class="paper container-lg">  

  <Collapsible label="Add New Listing">Collapsible : Add New Listing</Collapsible>
  <Table {supplies} />
</div>  
