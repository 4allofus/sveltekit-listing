<script>
      import 'papercss/dist/paper.min.css'
      import {Collapsible} from 'spaper';
      import {Table} from 'spaper';

       const data = [
        { rank: 1, name: 'Novak Djokovic', country: 'Serbia' },
        { rank: 2, name: 'Daniil Medvedev', country: 'Russia' },
        { rank: 3, name: 'Stefanos Tsitsipas', country: 'Greece' },
        { rank: 4, name: 'Alexander Zverev', country: 'Germany' },
      ];

</script>


<div class="paper container-lg">  

  <Collapsible label="Add New Listing">Collapsible : Coba Add New Listing</Collapsible>
  <Table {data} />
</div>  
