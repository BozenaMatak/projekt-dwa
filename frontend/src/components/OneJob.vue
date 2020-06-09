<template>
    <div class="row" style="border: 1.5px solid 	rgb(233, 230, 230); padding: 2% 0; ">
      <div class="ostatak">
        <div class="header-one">
          <strong>{{info.naziv_posla}}</strong>
        </div>
        <div class="body-one">
          {{info.opis_posla}}
        </div>
        <div class="footer-one row">
          <div style="width: 40%;">{{ timeAgo }}</div>
          <div style="width: 60%;">{{info.kategorija_posla}}</div>
        </div>
      </div>
      <div class="zarada">
        {{info.zarada}}
      </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
  props: [ 'info'],
  data () {
    return {
      newComment: '',
      comments: [],

    }
  },
  computed: {
    timeAgo () {
      return moment(this.info.posted_at).fromNow()
    }
  },
  methods:{
    async fetchComment() {

            this.comments = await Posts.getAllComment(this.info.id);
        },
  }
}
</script>

<style>
.ostatak{
  width: 80%;
}
.zarada{
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
    margin-top: 2%;
  }
  .body-one{
    width: 90%;
    margin: auto;
    margin-bottom: 2%;
    text-align: left;
    color: rgb(100, 100, 100)
  }
  .footer-one{
    width: 90%;
    margin: auto;
    margin-bottom: 2%;
    font-weight: bold;
    font-size: 19px;
  }
</style>