<script>

import { Button } from "spaper";
import Index from "./index.svelte";

let toDark = "";
let modes = "Light";

function toDarkFuncion(){
  if(toDark == ""){
      toDark = "dark";
      modes= "Dark";
  }else{
      toDark = "";
      modes = "Light";
  }
}

</script>
<nav class="fixed split-nav">
    <div class="nav-brand">
      <h3><a sveltekit:prefetch href="\">Listing Bank</a></h3>
    </div>
    <div class="collapsible">
      <input id="collapsible1" type="checkbox" name="collapsible1">
      <label for="collapsible1">
        <div class="bar1"></div>
        <div class="bar2"></div>
      </label>
      <div class="collapsible-body">
        <ul class="inline">
          <li><a sveltekit:prefetch href="\">Home</a></li>
          <li><a sveltekit:prefetch href="listing">listing</a></li>
        </ul>
      </div>
    </div>
  </nav>
  
<html class="{toDark}">
  <slot></slot>
</html>