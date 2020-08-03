<template>
<div class="EditNewsItem">
  <h2> Edit Post </h2>
  <div><Head/></div>
          <form id="edit-post-form" @submit.prevent="editPost">
            <div class="form-group col-md-12">
                <label for="title"> Title </label>
                <input type="text" id="title" v-model="post.title" name="title" class="form-control" placeholder="Enter title">
            </div>
            <div class="form-group col-md-12">
                <label for="body"> Body </label>
                <textarea id="body" cols="30" rows="5" v-model="post.body" class="form-control"></textarea>
            </div>
            <div class="form-group col-md-4 pull-right">
                <button class="btn btn-success" type="submit"> Edit Post </button>
            </div>
          </form>
        </div>
  
</template>

<script>
import Head from './Head'

export default {
  name: 'EditNewsItem',
  data() {
    return {
      id: 0,
      post: {}
    };
  },
   components: {
    Head,
  },
  created() {
   
  },
  methods: {
    

  }
};
</script>

