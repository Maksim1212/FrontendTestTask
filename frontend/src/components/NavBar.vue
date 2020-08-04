<template>
  <div id="navBar">
    <Head/>
      <router-link :to="'/create'"> 
        Добавить статью
  </router-link>
    <div>
        <NewsItem
        v-for="feed in NEWS"
        :key="(Object.assign({}, ...feed))._id"
        :news_data="feed"
        @sendNewsItemId="deleteItem"
    />
    </div>
  </div>
</template>

<script>
import Head from './Head'
import NewsItem from './NewsItem'

import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'NavBar',
  methods: {
   ...mapActions(['GET_NEWS_FROM_API','DELETE_NEWS_ITEM_BY_ID_FROM_API']),

  //  showChildArticleInConsole(data){
  //    console.log(data);
  //  },
   deleteItem(id) {
     let xAccessToken = localStorage.getItem('api_token');
      this.DELETE_NEWS_ITEM_BY_ID_FROM_API(id,xAccessToken);
   }
  },
  computed: {
   ...mapGetters(['NEWS']),
  },
  components: {
    Head,
    NewsItem,
   
  },
   mounted() { 
       this.GET_NEWS_FROM_API()
  },
}
</script>

<style >
#navBar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
