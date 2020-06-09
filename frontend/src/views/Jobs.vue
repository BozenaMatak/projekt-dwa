<template>
  <div class="pozadina">
      <div class="naslov">
          <div @click="gotoDetails(job)" :key="job.id" v-for="job in jobs">
            <OneJob :info="job" />
          </div>   
      </div>
    
  </div>    
</template>

<script>
import _ from 'lodash';
import { Posts } from '@/services';
import OneJob from '@/components/OneJob.vue';
import proba from '@/components/proba.vue';


export default {
  data() {
        return {
           jobs: [],

        };
    },
    //watch: {
    //    'store.searchTerm': _.debounce(function(val) {
    //        this.fetchPosts(val);
    //    }, 500)
    //},
    created() {
        this.GetAllJobs();
        
    },
    name: 'Jobs',
    methods: {
        async GetAllJobs() {

            this.jobs = await Posts.getAll();
            console.log(this.jobs)

        },
        gotoDetails(job) {
            this.$router.push({ path: `Job/${job.id}` });
        }
        //gotoDetails(card) {
        //    this.$router.push({ path: `post/${card.id}` });
        //}
    },
    components: {
        OneJob,
        proba
    }
  
}
</script>

<style scoped>
.pozadina{
    background-color:white;
    width: 70%;
    margin: 5% auto;
    
  }

  .naslov{
    
    width: 90%;
    text-align: left;
    margin: auto;
    margin-bottom: 5%;
    padding: 2% 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    background-color:white;
  }
  

</style>  