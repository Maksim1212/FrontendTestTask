<template>
<div class="EditNewsItem">
          <form id="edit-post-form" @submit.prevent="editPost">
            <div class="form-group col-md-12">
                <input type="text" id="title" size="90" v-model="title" name="title" class="form-control" placeholder="Enter title">
            </div><br>
            <div class="form-group col-md-12">
                <textarea id="body" cols="90" rows="20" v-model="content" class="form-control"></textarea>
            </div>
            <div class="successButton">
                <button class="btn btn-success" type="submit"> Сохранить </button>
            </div>
          </form>
          <!-- <div class="cancelButton">
            <button v-on:click="cancel">Отменить</button>
          </div> -->
        </div>
  
</template>

<script>

import {mapActions} from 'vuex'

export default {
  name: 'EditNewsItem',
  data() {
    return {
      title: '',
      content: '',
    };
  },
  methods: {
   ...mapActions(['GET_NEWS_ITEM_BY_ID_FROM_API','UPDATE_NEWS_ITEM_BY_ID_FROM_API']),
   editItem(){
        this.DELETE_NEWS_ITEM_BY_ID_FROM_API(this.$route.params.id)
    },
    cancel(){
      this.$router.push('/news/'+ this.$route.params.id);
    },
    editPost(){
      let postData = {
        title: this.title,
        content: this.content,
        id: this.$route.params.id,
        token: localStorage.getItem('api_token')
      };
      this.UPDATE_NEWS_ITEM_BY_ID_FROM_API(postData);
    },
  },

  async mounted() { 
      let result = await this.GET_NEWS_ITEM_BY_ID_FROM_API(this.$route.params.id);
       console.log(result.data.feed['content']);
      this.title = result.data.feed['title'];
      this.content = result.data.feed['content'];
  },
};
</script>
<style>
.EditNewsItem {
text-align: center;
}
.successButton{
  position: relative;
  left: -25.7%;
}
.cancelButton{
  position: relative;
  left: -18%;
  top: -21px;
}
</style>
