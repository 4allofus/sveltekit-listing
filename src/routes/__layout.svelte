<script>

import { Button } from "spaper";
import {isSignedIn} from "$lib/firebaseConfig";
let toDark = "";
let modes = "Light";

function toggleSignedIn(){
  isSignedIn.update(isSignedIn => !isSignedIn);
  console.log(isSignedIn);
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
          <li><button on:click={toggleSignedIn}>Admin</button></li>
        </ul>
      </div>
    </div>
  </nav>
  
<html lang="en">
  <slot></slot>
</html>