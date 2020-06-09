<template>
  <div class="mojprofil">
    <div class="info">
      <h3><strong>User information</strong></h3>
      <div class="okvir">
        {{user.ime}}
        {{user.prezime}}
        {{user.drzava}}
        {{user.grad}}
        {{user.godina}}
        {{user.kategorija_posla}}
        {{user.opis_posla}}
        {{user.email}}
       <div style="width: 100%; text-align: right;" class="button"><button>Edit profile</button></div>
      </div>
    </div>
  </div>    
</template>


<script>
import {Auth} from '@/services';


export default {
   data() {
    return {
      user: {}
    };
  },
  methods: {
   profil(){
     this.user = Auth.profil()
   }
  },
  created() {
        this.profil();
        
    },
}

</script>

<style scoped>
    button{
      width: 20%;
      padding: 1%;
    }
   .mojprofil{
    margin: 5%;
    min-height: 700px;   
  }

  .info{
    background-color:white;
    width: 80%;
    margin: auto;
    padding: 2% 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    box-shadow: 9px 9px 7px gray;
  }
  h3{
    text-align: left;
    margin: 1.5% 8%;
  }

  .okvir{
    border: rgb(233, 230, 230) 3px solid;
    width: 70%;
    padding: 3%;
    margin: auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }


</style>