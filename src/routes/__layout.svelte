<script>

import { Button } from "spaper";
import {isSignedIn, adminId, currentUser} from "$lib/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider, 
        setPersistence, signInWithRedirect, browserSessionPersistence,
        getRedirectResult, inMemoryPersistence, } from "firebase/auth";
import { subscribe } from "svelte/internal";

//Toggle DarkMode
let isDark_value = false;
$: darkMode = "light";

function toggleDarkMode(){
  if(isDark_value){
    isDark_value = false;
    darkMode = "light";
  }else{
    isDark_value = true;
    darkMode = "dark";
  }
}

//Toggle sign in
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
            
            if(user.uid === adminId){
              isSignedIn.update(isSignedIn => true);
              $currentUser = [{
                uid: user.uid,
                email: user.email,
                name: user.name
              }];
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
        <div class="bar2"></div>
      </label>
      <div class="collapsible-body">
        <ul class="inline">
          <li><button on:click={toggleSignedIn}>Admin</button></li>
          <li><button on:click={toggleDarkMode}>{darkMode}</button></li>
        </ul>
      </div>
    </div>
  </nav>
  
<html lang="en" class={darkMode}>
  <slot ></slot>
</html>
