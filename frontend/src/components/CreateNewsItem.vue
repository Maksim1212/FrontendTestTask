<template>
    <div class="post_form">
        <form @submit.prevent="sendPost">
            <div class="form-group">
                 <small 
                        v-if="!$v.title.required"
                        class="invalid-feedback">Please enter title.
                </small>
                <input
                        size="90"
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        v-model="title"
                        @blur="$v.title.$touch()"
                        :class="{'is-invalid' : $v.title.$error}">
            </div><br>
            <div class="form-group">
                <textarea
                        cols="90"
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
                    let data = {
                        'token': localStorage.getItem('api_token'),
                        'title': this.title,
                        'content': this.content,
                    };
                    this.CREATE_NEWS_ITEM(data)
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
        text-align: center;
        max-width: 50rem;
        margin-left: 10rem;
        margin-top: 10rem;
    }
    .text-textarea{
        height: 20rem;
    }
    .invalid-feedback{
        position:relative;
        top: 20%;
        left: 20%;
    }
</style>
