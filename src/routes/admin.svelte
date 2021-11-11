<script>
      import 'papercss/dist/paper.min.css'

      let supplies = [
		    { id: '1', title: 'Rumah pik murah', harga: '5', satuan: 'M', detil: 'Jl Camar 5 no 32', kategori: 'rumah' },
		    { id: '2', title: 'Rumah pik murah', harga: '5', satuan: 'M', detil: 'Jl Camar 5 no 32', kategori: 'rumah' }
	    ];
</script>

<div class="paper container-lg">
<table class="table-hover table alternating">
  <thead>
    <tr>
      <th>id</th>
      <th>title</th>
      <th>harga</th>
      <th>satuan</th>
      <th>detil</th>
      <th>kategori</th>
    </tr>
  </thead>
  <tbody>
    {#each supplies as item}
    <tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.harga}</td>
      <td>{item.satuan}</td>
      <td>{item.detil}</td>
      <td>{item.kategori}</td>
    </tr>
    {/each}
  </tbody>
</table>

</div>