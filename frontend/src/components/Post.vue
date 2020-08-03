<template>
  <div class="post">
      <h1>Hello  
      </h1>
      <h3>{{NEWS.title}}</h3>
      <p>{{NEWS.creator.displayName}} | {{NEWS.createDate.split('T')[0]}}</p>
      <br>
      <p>{{NEWS.content}}</p> 
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Post',
  methods: {
   ...mapActions(['GET_NEWS_ITEM_BY_ID_FROM_API']),
  },
  computed: {
   ...mapGetters(['NEWS']),
  },
   mounted() { 
       this.GET_NEWS_ITEM_BY_ID_FROM_API(this.$route.params.id)
  },
}
</script>

<style scoped>
.post {
    text-align: center;
}
</style>
