
<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="head">
      <a class="href" href="URL">Главная</a>
      <a v-if="userName !==''" class="userName">{{userName}} |</a>
      <a v-else class="userName"></a>
        <button class="loginButton" v-if="userName ==''" v-on:click="signIn">Войти</button>
             <button class="loginButton" v-else v-on:click="signOut">Выйти</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
            return {
                userName:'',
                content: [],
                title: [],
                displayName: [],
            }
        },
  // metaInfo: {
  //   meta: [
  //    { name:"google-signin-scope",
  //      content:"profile email"
  //    },
  //    {
  //      name:"google-signin-client_id",
  //      content:"247409339704-fohillbippgv49r9054m33j0egmel218.apps.googleusercontent.com"
  //    }]
  //   },
    methods: {
    async signIn(){
    console.log('login');
    const googleUser = await this.$gAuth.signIn();
    this.userName += googleUser.Ot.FW;
    console.log(googleUser);
      },
    async signOut(){
      const response = await this.$gAuth.signOut()
      console.log(response);
    }
  },
  computed: {
    allPosts() {
      return this.$store.getters.allPosts;
    }
  },
  components: {
    // HelloWorld,
    // GoogleLogin,
  },
  async mounted() { 
     const res = await this.axios.get('http://127.0.0.1:5000/api/v1/feeds', {});
    //this.axios.get('http://127.0.0.1:5000/api/v1/feeds').then(response => console.log(response));
    console.log(res.data.feeds);
    for (let i = 0; i <= res.data.length; i += 1) {
            this.content.push(res.data[i].content);
            this.title.push(res.data[i].title);
            this.displayName.push(res.data[i].displayName);
        }
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
