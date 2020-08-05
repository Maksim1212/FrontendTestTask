<template>
<div class="EditNewsItem">
  <Head/>
     <div class="formPosition">
        <form id="edit-post-form" @submit.prevent="editPost">
          <div class="form-group col-md-12">
              <input type="text" 
              id="title" 
              size="90" 
              v-model="title" 
              name="title" 
              class="form-control" 
              placeholder="Enter title"
              :class="{'is-invalid' : $v.title.$error}">
           </div><br>
        <div class="form-group col-md-12">
           <textarea id="body" cols="90" rows="20" v-model="content" class="form-control"
                        :class="{'is-invalid' : $v.content.$error}"></textarea>
        </div>
           <div class="successButton">
             <button class="btn btn-success" type="submit" :disabled="$v.$invalid"> Сохранить </button>
        </div>
        </form>
      </div>
          <div class="cancelButton">
            <button v-on:click="cancel">Отменить</button>
          </div>
      </div>
  
</template>

<script>

import Head from '../components/Head'
import {mapActions} from 'vuex'
import { required } from 'vuelidate/lib/validators'

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
      this.$router.push('/news/'+ this.$route.params.id);

    },
  },
  components: {
    Head,
  }, 
  
  validations: {
      title: {
        required,
      },
      content: {
        required,
      }
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
.successButton{
  position: fixed;
  left: 25%;
  top: 510px;
}
.formPosition{
  position: fixed;
  left: 25%;
  top: 25%;
}
.cancelButton{
  position: fixed;
  left: 32%;
  top: 510px;
}
</style>
