<template>
<div>
  <Head/>
<div class="post">
    <div class="icons" v-if="checkUserId">
          <img class="newsActions" src="../assets/clear.svg" v-on:click="deleteItem">
     <router-link :to="{name: 'Edit', params: {}}">
          <img class="edit" src="../assets/pencil.svg">
      </router-link>
      </div>
      <div v-else></div>
      <h1>{{this.NEWS.title}}</h1>
      <p>{{this.NEWS.creator.displayName}} | {{getDate}}</p>
      <br>
      <p>{{this.NEWS.content}}</p>
</div>
     <div class="buttons" v-if="checkUserId">
        <button v-on:click="editItem">Редактировать</button>
        <button class="delButton" v-on:click="deleteItem">Удалить</button> 
     </div>
     <div class="buttons" v-else></div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
import Head from '../components/Head'

export default {
  name: 'Post',
  methods: {
   ...mapActions(['GET_NEWS_ITEM_BY_ID_FROM_API','DELETE_NEWS_ITEM_BY_ID_FROM_API']),
   deleteItem(){

     let data= {
       'id': this.$route.params.id,
       'token': localStorage.getItem('api_token')
     }
        this.DELETE_NEWS_ITEM_BY_ID_FROM_API(data);
        this.$router.push('/news');
    },
    editItem(){
      this.$router.push('/news/'+ this.$route.params.id +'/edit');
    },
  },
  computed: {

   ...mapGetters(['NEWS']),

   getDate(){
     return this.NEWS.createDate.split('T')[0];
   },

    checkUserId(){
      return true
   }

  },
   mounted() { 
       this.GET_NEWS_ITEM_BY_ID_FROM_API(this.$route.params.id);
  },
  components: {
    Head
  }
}
</script>

<style scoped>
.post {
  position: relative;
  top: 56px;
    text-align: center;
    outline: 1px solid #000;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}
.newsActions{ 
    position: relative;
    left: 49%;
    cursor: pointer;
    width: 22px;
    height: 18px;  
}
.edit{
    cursor: pointer;
    width: 22px;
    height: 18px;  
    position: relative;
    left: -68%
}
.icons{
    position: absolute;
    left: 95%;
}
.buttons{
  position: fixed;
  top: 50%;
}
.delButton{
  margin-left: 6px;
}

</style>
