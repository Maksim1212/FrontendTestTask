<template>
  <div class="NewsList">
    <NewsItem/>
 </div>
</template>

<script>
import NewsItem from '../components/NewsItem'

export default {
  name: 'NewsList',
  methods: {},
  comments: {
    NewsItem,
  }
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
