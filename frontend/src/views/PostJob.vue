<template>
  <div class="pozadina">
    <div class="login">
      <div class="naslov">
        <h1><strong>Work from <span style="color: rgb(146, 187, 214)">home</span></strong></h1>
        <h2 style="color: rgb(150, 187, 220)"><strong><i class="fa fa-plus"></i> Post job</strong></h2>
      </div>
      <form @submit.prevent="addJob">
        <div class="form-group">
          <input v-model="naziv_posla" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Job title">
        </div>
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
       <div class="form group" style="text-align: left;">
          <textarea v-model="potrebne_vjestine" placeholder="Required skills" id="w3mission">
          </textarea>
        </div>
        <div class="form-group">
          <input v-model="zarada" type="text" class="form-control" id="exampleInputPassword1" placeholder="Salary">
        </div>
        <button type="submit" class="btn btn primary">Post job</button>
      </form>
    </div>
  </div>    
</template>

<script>
  import { Posts } from '@/services';
import OneJob from '@/components/OneJob.vue';
import proba from '@/components/proba.vue';

export default {
    data() {
        return {
            naziv_posla: '',
            kategorija_posla:'',
            zarada: '',
            opis_posla: '',
            potrebne_vjestine: '',
            kategorije:['Web pages IT & Software', 'Writting and content', 'Engineering & Science','Designe, Media & Architecture', 'Sales and marketing','Translation & Languages','Mobile phone apps', 'Other']
        };
    }, 
    name: 'PostJob',
    methods: {
      async addJob(){
        let job = {
          naziv_posla: this.naziv_posla,
          kategorija_posla: this.kategorija_posla,
          zarada: this.zarada,
          opis_posla: this.opis_posla,
          potrebne_vjestine: this.potrebne_vjestine

        };
        let newjob = await Posts.add_job(job);
        console.log('Spremljeni posao', newjob.data);

        this.$router.push({ path: '/' });
      }
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
    margin: 5% 3%;
    clear: both;
  }
  input{
    padding: 6%;
    font-size: 18px;
    background-color:white;
    border: rgb(233, 230, 230) 3px solid;
  }
  #w3mission{
    width: 93%;
    padding: 6%;
    font-size: 18px;
    background-color:white;
    border: rgb(233, 230, 230) 3px solid;  
    margin: 2% 2%; 
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