<template>
    <div class="post_form">
        <form @submit.prevent="sendPost">
            <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        v-model="title"
                        @blur="$v.title.$touch()"
                        :class="{'is-invalid' : $v.title.$error}"
                >
                <small
                        v-if="!$v.title.required"
                        class="invalid-feedback">Please enter title.
                </small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Content</label>
                <textarea
                        id="exampleInputPassword1"
                        class="form-control text-textarea"
                        aria-label="With textarea"
                        v-model="content"
                        @blur="$v.content.$touch()"
                        :class="{'is-invalid' : $v.content.$error}"
                ></textarea>
                <small
                        v-if="!$v.content.required"
                        class="invalid-feedback">Please add some content.
                </small>
            </div>
            <button type="submit"
                    class="btn btn-primary"
                    :disabled="$v.$invalid"
            >Submit</button>
        </form>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import { required } from 'vuelidate/lib/validators'
    export default {
        data(){
            return{
                title: '',
                content: '',
                isButtonDisable: true
            }
        },
        methods: {
            ...mapActions(['CREATE_NEWS_ITEM']),
            sendPost() {
                if (this.title.trim() && this.content.trim()) {
                    let xAccesToken = localStorage.getItem('api_token');
                    let newPost = {
                        'title': this.title,
                        'content': this.content,
                    };
                    console.log(newPost);
                    this.CREATE_NEWS_ITEM(xAccesToken,newPost)
                    console.log(newPost)
                    console.log(xAccesToken)
                    alert('Ваш пост был успешно добавлен!')
                    // this.title = this.content = ''
                    this.$router.push('/news')
                }
                else {
                    console.log('Some error')
                }
            }
        },
        validations: {
            title: {
                required
            },
            content: {
                required
            }
        }
    }
</script>

<style scoped>
    .post_form{
        max-width: 50rem;
        margin-left: 10rem;
        margin-top: 10rem;
    }
    .text-textarea{
        height: 20rem;
    }
</style>
