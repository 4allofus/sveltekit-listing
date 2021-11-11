<script>
      import 'papercss/dist/paper.min.css'

      let supplies = [
		    { id: '1', title: 'Rumah pik murah', harga: '5', satuan: 'M', detil: 'Jl Camar 5 no 32', kategori: 'rumah' },
		    { id: '2', title: 'Rumah pik murah', harga: '5', satuan: 'M', detil: 'Jl Camar 5 no 32', kategori: 'rumah' }
	    ];
</script>


<div class="paper container-md">
  <div class="row">
    <div class="collapsible">
      <input id="collapsible1" type="checkbox" name="collapsible">
      <label for="collapsible1">Add New Listing</label>
      <div class="collapsible-body">
        <span>Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin ball tip turducken...</span>

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
        
        </div>
      </div>
    </div>
  </div>  


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