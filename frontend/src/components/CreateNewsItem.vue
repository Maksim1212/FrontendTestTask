<template>
    <div>
<Head/>
        <div class="inputs">
            <form @submit.prevent="sendPost">
            <div class="form-group">
                 <small 
                        v-if="!$v.title.required"
                        class="inputMess">Напишите заголовок статьи
                </small>
                <input
                        size="90"
                        type="text"
                        class="form-control"
                        v-model="title"
                        :class="{'is-invalid' : $v.title.$error}">
            </div><br>
            <div class="form-group">
                <textarea
                        cols="90"
                        class="text-textarea"
                        v-model="content"
                        :class="{'is-invalid' : $v.content.$error}"
                ></textarea>
                <small
                        v-if="!$v.content.required"
                        class="inputMess2">Напишите текст статьи
                </small>
            </div>
            <button type="submit"
                    class="btn-btn-primary"
                    :disabled="$v.$invalid">Сохранить</button>
        </form>
        <button class="cancelButton" v-on:click="cancel">Отмена</button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import { required } from 'vuelidate/lib/validators'
    import Head from '../components/Head'

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
                    this.CREATE_NEWS_ITEM(data);
                    alert('Ваш пост был успешно добавлен!');
                    this.$router.push('/news');
                }
                else {
                    console.log('Some error');
                }
            },
            cancel(){
                this.$router.push('/news/')
            }
        },
        components:{
            Head
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
.form-control{
    position: fixed;
    top: 74px;
    left: 22%
}

    .post_form{
        text-align: center;
        max-width: 50rem;
        margin-left: 10rem;
        margin-top: 10rem;
    }
    .text-textarea{
        height: 20rem;
        position: fixed;
        top:120px;
        left: 22%
    }
    .inputMess{
        position:fixed;
        top: 54px;
        left: 564px;
    }
    .inputMess2{
        position:fixed;
        top: 100px;
        left: 564px;
    }
    .btn-btn-primary{
        position: fixed;
        top: 460px;
        left: 286px;
    }
    .cancelButton{
        position: fixed;
        top: 460px;
        left: 388px;
    }
</style>
