<template>
    <div class="Head">
      <a class="href">
         <router-link :to="'/news/'"> 
         Главная
  </router-link></a>
       <a v-if="userName !==''" class="userName">{{userName}} |</a>
      <a v-else class="userName"></a> 
        <button class="loginButton" v-if="userName ==''" v-on:click="signIn">Войти</button>
        <button class="loginButton" v-else v-on:click="signOut">Выйти</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Head',
  data() {
            return {
                userName:'',
                googleId:Number,
                id_token: '',
            }
        },

  methods: {
    async signIn(){
      try{
      const googleUser = await this.$gAuth.signIn();
      localStorage.setItem('name', googleUser.Ot.FW);
      localStorage.setItem('googleID', googleUser.Ot.$U);
      localStorage.setItem('id_token', googleUser.wc.id_token);
      this.userName = localStorage.getItem('name');
      let token = await axios.post('http://127.0.0.1:5000/api/v1/auth/google', {
        token: `${localStorage.getItem('id_token')}`
      });
      console.log(token.data.token);
      localStorage.setItem('api_token', token.data.token);
      // localStorage.getItem('googleID'),
      // localStorage.getItem('id_token')
      }catch(error){
        console.log(error)
      }         
    },
    async signOut(){
      try{
        await this.$gAuth.signOut();
        localStorage.clear();
        this.userName = '';
      }catch(error){
        console.log(error)
      }
    }
  },
  
  mounted() {
    if(localStorage.getItem('name') === null){
      this.userName = '';
    }else{
      this.userName = localStorage.getItem('name');
    }
  },
}

</script>

<style scoped>

.Head {
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
