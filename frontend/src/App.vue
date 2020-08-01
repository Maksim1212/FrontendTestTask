<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Head/>
    <div>
        <NewsItem
        v-for="feed in NEWS"
        :key="(Object.assign({}, ...feed))._id"
        :news_data="feed"
    />
    </div>
  </div>
</template>

<script>
import Head from './components/Head'
import NewsItem from './components/NewsItem'

import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',
  methods: {
   ...mapActions(['GET_NEWS_FROM_API']),
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
