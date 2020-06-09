<template>
  <div class="Proba">
      <div class="row" style = "border: 3px solid grey; padding: 0; margin: 5%; background-color: white;">
        <div class="ostatak">
          <div class="header-one">
            <strong>{{proba.naziv_posla}}</strong>
          </div>
          <div class="body-two">
            <strong>{{proba.ime}}</strong>
            <strong> {{proba.prezime}}</strong>
          </div>
          <div class="body-one">
            {{proba.opis_posla}}
          </div>
          <div class="footer-two row">
            <div style="width: 100%;"><strong>Required skills: </strong> {{ proba.potrebne_vjestine}}</div>
          </div>
          <div class="footer-one row">
            <div style="width: 30%; text-aligne: center; margin-top: 2%;">{{ timeAgo }}</div>
            <div style="width: 30%; text-aligne: center; margin-top: 2%;">{{proba.kategorija_posla}}</div>
            <div class="button1"><button v-on:click="delete_job" style="margin:auto;">Delete job</button></div>
            <div class="button1"><button>Edit job</button></div>
          </div>
        </div>
        <div class="zarada">
          {{proba.zarada}}
        </div>
         <div class="container">
          <form style="margin-top:2%;" @submit.prevent="addComment">
            <div class="form-group">
              <textarea v-model="komentar" placeholder="Add a comment" class="form-control" rows="4" id="comment"></textarea>
            </div>
            <div class="button1"><button style="font-size: 18px;">Post comment</button></div>
          </form>
          <div :key="comment.id" v-for="comment in comments">
            <comments :comm="comment" />
          </div>
        </div> 
      </div> 
 
  </div>
</template>


<script>
import moment from 'moment'
import { Posts } from '@/services'
import comments from '@/components/comments.vue';

export default {
  props: [ 'proba'],

  data() {
    return {
      komentar: '',
      newComment: "",
      comments: [],
      jobId: "" //moze se drukcije zvat nego u services
    };
  },
  methods:{
    async GetComment(){
        this.jobId = this.$route.params.id
        this.comments = await Posts.getAllComment(this.jobId);
        console.log(this.comments)
    },
    async addComment(){
        let comment = {
          komentar: this.komentar,
          Idjoba: this.jobId
        };
        let comments = await Posts.add_comment(comment);
        console.log('Spremljeni komentar', comments.data);

      },
      async delete_job(){
        let delet = await Posts.delete_job(this.jobId)
        this.$router.push({ path: '/' });
      }
  },
  created(){
    this.GetComment();
  },



  computed: {
    timeAgo () {
      return moment(this.proba.posted_at).fromNow()
    }
  },
  components: {
        comments
    }
}
</script>

<style>
.button1{
    width: 18%;
    margin: 1%;
} 
.button1 button{
    width: 100%;
    font-size: 20px;
    background-color:rgb(146, 187, 214);
    border: none;
    color: white;
    font-weight: bold;
    padding: 5% 3%;
    } 
  button{
    font-size: 20px;
    width: 60%;
    background-color:rgb(146, 187, 214);
    border: none;
    padding: 3%;
    color: white;
    font-weight: bold;
    
  }
   button:hover{
     box-shadow: 9px 9px 7px gray;
    }
.zarada{
  width: 20%;
  margin: 5% auto;
  font-weight: bold;
  text-align: center;
  font-size: 25px;
}
.ime{
  width: 20%;
  margin: auto;
  font-weight: bold;
  text-align: center;
  font-size: 25px;
}
.prezime{
  width: 20%;
  margin: auto;
  font-weight: bold;
  text-align: center;
  font-size: 25px;
}
  .header-one{
    font-size: 25px;
    width: 90%;
    margin: auto;
    margin-bottom: 2%;
    margin-top: 4%;
  }
  .body-one{
    font-size: 20px;
    width: 90%;
    margin: auto;
    margin-bottom: 2%;
    text-align: left;
    color: rgb(34, 33, 33)
  }
  .body-two{
    font-size: 22px;
    width: 90%;
    margin: auto;
    margin-bottom: 2%;
    text-align: left;
    color: rgb(34, 33, 33)
    
  }
  .footer-one{
    width: 90%;
    margin: auto;
    margin-bottom: 3%;
    font-weight: bold;
    font-size: 22px;
  }
  .footer-two{
    margin: auto;
    text-align: left;
    width: 90%;
    margin-bottom: 3%;
    color: rgb(34, 33, 33);
    font-size: 19px;
  }

  .container{
    margin: 2%;
    width: 40%;
  }
  
</style>