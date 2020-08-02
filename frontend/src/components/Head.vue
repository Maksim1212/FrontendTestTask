<template>
    <div class="head">
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

export default {
  name: 'Head',
  data() {
            return {
                userName:'',
            }
        },
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

}

</script>

<style>

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
