<template>
  <div class="NewsItem">
      <h3>{{news_data.title}}</h3>
      <p>{{news_data.creator.displayName}} | {{news_data.createDate.split('T')[0]}}</p>
      <p>{{news_data.content}}</p>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
      news_data: {
          type: Object,
          default(){
              return {}
          }
      },
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
</style>
