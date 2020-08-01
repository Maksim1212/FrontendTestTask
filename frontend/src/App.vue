<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Head/>
    <div>
        <p>{{NEWS}}</p>
    </div>
  </div>
</template>

<script>
import Head from './components/head'
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
.head {
  width: 99%;  height: 38px; /* Размеры */
  outline: 1px solid #000; /* Чёрная рамка */
  border: 3px solid #fff; /* Белая рамка */
  border-radius: 10px; /* Радиус скругления */
  position: relative;
  top: -54px;
  right: -4px;
}
.loginButton{
  position: relative;
  left: 42%;
  top: 20%;
  /* border: 23px; */
}
.href{
  position: relative;
  left: -43%;
  top: 20%;
}
.userName{
  position: relative;
  left: 41.5%;
  top: 20%;
  font-size: 1em;
  font-weight: bold;
}


</style>
