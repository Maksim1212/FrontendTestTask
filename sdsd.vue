<template>
<div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <button v-on:click="onSignIn('247409339704-fohillbippgv49r9054m33j0egmel218.apps.googleusercontent.com')">Login</button> -->
    <!-- <div class="g-signin2" v-on:click="onSignIn" data-theme="dark"></div> -->
       <button v-on:click="signIn">Log in</button>
       <!-- <button v-on:click="onOk">pi</button> -->
          <!-- <button v-on:click="signOut">Log out</button> -->
          
    </div>
 
</template>

<script>

// import GoogleLogin from 'vue-google-login'
// import HelloWorld from './components/HelloWorld.vue'
//import getAuthInstance from 'vue-google-login';


export default {
  name: 'App',
  metaInfo: {
    meta: [
     { name:"google-signin-scope",
       content:"profile email"
     },
     {
       name:"google-signin-client_id",
       content:"247409339704-fohillbippgv49r9054m33j0egmel218.apps.googleusercontent.com"
     }]
    },
    methods: {
      signIn(){
    console.log('login');
    const auth2 = window.gapi.auth2.getAuthInstance()
    auth2.signIn().then(googleUser => {
    
      // метод возвращает объект пользователя
      // где есть все необходимые нам поля
      const profile = googleUser.getBasicProfile()
      console.log('ID: ' + profile.getId()) // не посылайте подобную информацию напрямую, на ваш сервер!
      console.log('Full Name: ' + profile.getName())
      console.log('Given Name: ' + profile.getGivenName())
      console.log('Family Name: ' + profile.getFamilyName())
      console.log('Image URL: ' + profile.getImageUrl())
      console.log('Email: ' + profile.getEmail())

      // токен
      const id_token = googleUser.getAuthResponse().id_token
      console.log('ID Token: ' + id_token)
    })
  },
      onOk(){
        console.log('wdwd');
        alert('uuu')
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
   mounted() {
    let externalScript = document.createElement('script');
    externalScript.setAttribute('src', 'https://apis.google.com/js/platform.js');
    document.head.appendChild(externalScript);
    
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
