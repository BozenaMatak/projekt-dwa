<template>
  <div class="pozadina">
    <div class="login">
      <div class="naslov">
        <h1><strong>Work from <span style="color: rgb(146, 187, 214)">home</span></strong></h1>
        <h2 style="color: rgb(150, 187, 220)"><strong>Sign in</strong></h2>
      </div>
      <form @submit.prevent="login">
        <div class="form-group">
          <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
        </div>
        <div class="form-group">
          <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div> 
        <button type="submit" class="btn btn primary">Sign in</button>
      </form>
    </div>
  </div>    
</template>

<script>
import {Auth} from '@/services';


export default {
   data() {
    return {
      email: '',
      password:''
    };
  },
   methods: {
      async login(){
        let success = await Auth.login(this.email, this.password);
        console.log('Rezultat prijave', success);
        if(success == true){
          this.$router.push({path: '/'})
        }
      }
    },
}

</script>


<style scoped>
  .pozadina{
  
    width: 100%;
    min-height: 500px;
    
  }
  .login{
    background-color:white;
    width: 30%;
    margin: 7% auto;
    padding: 2% 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    box-shadow: 9px 9px 7px gray;
  }
 
  .naslov{
    border-bottom: 1.5px solid 	rgb(233, 230, 230);
    width: 80%;
    margin: auto;
    margin-bottom: 10%;
  }

  form{
    width: 80%;
    margin: auto;
  }
  .form-group{
    margin: 6% 3%;
    clear: both;
  }
  input{
    padding: 6%;
    font-size: 18px;
    background-color:white;
    border: rgb(233, 230, 230) 3px solid;
  }
  form button{
    font-size: 23px;
    width: 60%;
    margin:auto;
    background-color:rgb(146, 187, 214);
    border: none;
    padding: 3%;
    color: white;
    margin-top: 20px;
    font-weight: bold;
  }
   form button:hover{
     box-shadow: 9px 9px 7px gray;
    }

  @media(max-width: 600px){

   .login{
    width: 70%;
    border-radius: 20px;
    margin: 10% auto;
    padding: 2% 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    background-color: #dfd7da;
  }

}

</style>