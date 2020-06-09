<template>
  <div class="pozadina">
    <div class="login">
      <div class="naslov">
        <h1><strong>Work from <span style="color:rgb(146, 187, 214)">home</span></strong></h1>
        <h2 style="color: rgb(150, 187, 220)"><strong>Sign up</strong></h2>
      </div>
      <form v-if="i==1">
        <div class="form-group">
          <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
        </div>
        <div class="form-group">
          <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
      </form>
      <button v-if="i==1" v-on:click = "prikaz" type="submit" class="btn btn primary" style="width:15%; height:70px; border-radius: 100%;"><i class="fa fa-arrow-right" style="font-size:40px;"></i></button>
      <form v-if="i==2">
        <div class="form-group">
          <input v-model="ime" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First name">
        </div>
        <div class="form-group">
          <input v-model="prezime" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last name">
        </div>
        <div class="form-group">
          <input v-model="godina" type="password" class="form-control" id="exampleInputPassword1" placeholder="How old are you?">
        </div>
        <div class="form-group">
          <input v-model="drzava" type="password" class="form-control" id="exampleInputPassword1" placeholder="Country">
        </div>
        <div style="text-align: left;" class="form-group">
          <label style="font-size: 18px; color: grey;" for="category">City</label>
          <select style="border: rgb(233, 230, 230) 3px solid;" v-model="grad" class="form-control form-control-lg">
            <option :key="grad.id" v-for="grad in gradovi"><p>{{grad}}</p></option>
          </select>
        </div>
      </form>
      <button v-if="i==2" v-on:click = "prikaz"  type="submit" class="btn btn primary" style="width:15%; height:70px; border-radius: 100%;"><i class="fa fa-arrow-right" style="font-size:40px;"></i></button>
      <form v-if="i==3">
        <div style="text-align: left;" class="form-group">
          <label style="font-size: 18px; color: grey;" for="category">Job category</label>
          <select style="border: rgb(233, 230, 230) 3px solid;" v-model="kategorija_posla" class="form-control form-control-lg">
            <option :key="kategorija.id" v-for="kategorija in kategorije"><p>{{kategorija}}</p></option>
          </select>
        </div> 
        <div class="form group" style="text-align: left;">
          <textarea v-model="opis_posla" placeholder="Job description" id="w3mission">           
          </textarea>
        </div>
        <button type="submit" class="btn btn primary">Sign up</button>
      </form>
    </div>
  </div>    
</template>

<script>

export default {
  data (){
    return{
      i:1,
      email: '',
      password:'',
      ime:'',
      prezime:'',
      godina:'',
      kategorija_posla: '',
      kategorije:['Web pages IT & Software', 'Writting and content', 'Engineering & Science','Designe, Media & Architecture', 'Sales and marketing','Translation & Languages','Mobile phone apps', 'Other'],
      grad:'',
      gradovi:['Zagreb', 'Krapina', 'Sisak','Karlovac', 'Varaždin','Koprivnica','Bjelovar', 'Rijeka', 'Gospić', 'Virovitica', 'Požega', 'Slavonski Brod', 'Zadar','Osijek', 'Šibenik', 'Vukovar','Split','Pazin','Dubrovnik', 'Čakovec', 'Pula', 'Vinkovci']
    }
  },
  methods: {
    prikaz(){
      this.i=this.i+1;
    },
  }
}
</script>

<style scoped>
  .pozadina{
    
    width: 100%;
    min-height: 700px;
    
  }
  .login{
    background-color:white;
    width: 30%;
    margin: 5% auto;
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
   button{
    font-size: 20px;
    width: 60%;
    margin:auto;
    background-color:rgb(146, 187, 214);
    border: none;
    padding: 3%;
    color: white;
    margin-top: 20px;
    font-weight: bold;
  }
    button:hover{
     box-shadow: 9px 9px 7px gray;
    }
    #w3mission{
    width: 93%;
    padding: 6%;
    font-size: 18px;
    background-color:white;
    border: rgb(233, 230, 230) 3px solid;  
    margin: 2% 2%; 
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