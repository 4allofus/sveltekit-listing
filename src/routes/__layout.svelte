<script>

import { Button } from "spaper";
import {isSignedIn} from "$lib/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider, 
        setPersistence, signInWithRedirect, browserSessionPersistence,
        getRedirectResult, inMemoryPersistence, } from "firebase/auth";

let toDark = "";
let modes = "Light";

function toggleSignedIn(){
  //Admin - SignIn
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            
            if(user.uid === "iQC2zm7vPrfmfTLLQptdtM8KBcU2"){
              isSignedIn.update(isSignedIn => true);
            }else{
              isSignedIn.update(isSignedIn => false);
            }
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
          });
          
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
      </label>
      <div class="collapsible-body">
        <ul class="inline">
          <li><button on:click={toggleSignedIn}>Admin</button></li>
        </ul>
      </div>
    </div>
  </nav>
  
<html lang="en">
  <slot class="dark"></slot>
</html>