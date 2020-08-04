<template>
  <div class="NewsItem">
      <h3>{{news_data.title}}</h3>
      <div class="icons">
          <img class="newsActions" src="../assets/clear.svg" v-on:click="deleteItem">
     <router-link :to="{name: 'Edit', params: {id: news_data._id}}">
          <img class="edit" src="../assets/pencil.svg">
      </router-link>
      </div>
      <p>{{news_data.creator.displayName}} | {{news_data.createDate.split('T')[0]}}</p>
      <p>{{news_data.content.substring(0,200)}}
           <router-link :to="{name: 'Read', params: {id: news_data._id}}"> 
          <!-- <router-link :to="'/news'+news_data._id">  -->
              ...
          </router-link>
      </p>
  </div>
</template>

<script>

export default {
  name: 'NewsItem',
  props: {
      news_data: {
          type: Object,
          default(){
              return {
                  
              }
          }
      },
  },
  methods: {
    deleteItem(){
        this.$emit('sendNewsItemId', this.news_data._id)
    }
  },
}
</script>

<style scoped>
.NewsItem {
    outline: 1px solid #000;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

.edit{
    cursor: pointer;
    width: 22px;
    height: 18px;  
    position: relative;
    left: -72%
}
.icons{
    position: relative;
    top: -38px;
    left: 96%;
    width: 48px;
}
.newsActions{ 
    position: relative;
    left: 30%;
    cursor: pointer;
    width: 22px;
    height: 18px;  
}

</style>
