<template>
    <div class="Head">
      <div class="href">
         <router-link :to="'/news/'"> 
         Главная
  </router-link></div>
  <div>
    <div class="addArticle" v-if="userName !== ''">
<router-link :to="'/create'"> 
        Добавить статью
      </router-link>
      </div>
      <div v-else>
      </div>
  </div>
  <div class="actions">
    <a v-if="userName !==''" class="userName">{{userName}} |</a>
      <a v-else class="userName"></a> 
        <button class="loginButton" v-if="userName ==''" v-on:click="signIn">Войти</button>
        <button class="loginButton" v-else v-on:click="signOut">Выйти</button>
  </div>
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
      localStorage.setItem('api_token', token.data.token);
      localStorage.setItem('sessionUserId', token.data.user);
      this.$router.go();
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
        this.$router.go('/');
      }catch(error){
        console.log(error);
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
  background: rgb(249, 249, 249);
  width: 98.6%;  height: 38px; /* Размеры */
  outline: 1px solid #000; /* Чёрная рамка */
  position: fixed;
  top: 6px;
}
.loginButton{
    position: fixed;
    left: 92%;
    top: 18px;
    float: left;
  /* border: 23px; */
}
.href{
  position: fixed;
    left: 3%;
    height: 6%;
    top: 18px;
    width: 67px;
    float: left;
}
.actions{
    position: fixed;
    left: 83%;
    top: 18px;
}
.addArticle{
  position: fixed;
  top: 18px;
  left: 45%;
}
.userName{
  position: fixed;
  left: 86%;;
  top: 18px;
  font-size: 1em;
  font-weight: bold;
}


</style>
