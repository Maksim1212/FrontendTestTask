import axios from "axios"

export default {
    state: {
        news: []
    },
    mutations: {
        SET_NEWS_TO_STATE: (state, news) => {
            state.news = news;
        }
    },
    actions: {
        GET_NEWS_FROM_API({ commit }) {
            return axios('http://127.0.0.1:5000/api/v1/feeds', {
                    method: "GET"
                })
                .then((news) => {
                    commit('SET_NEWS_TO_STATE', news.data.feeds);
                    return news;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        GET_NEWS_ITEM_BY_ID_FROM_API(ctx, id) {
            return axios(`http://127.0.0.1:5000/api/v1/feeds/${id}`, {
                    method: "GET",
                })
                .then((news) => {
                    ctx.commit('SET_NEWS_TO_STATE', news.data.feed);
                    return news;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        DELETE_NEWS_ITEM_BY_ID_FROM_API(ctx, data) {
            return axios(`http://127.0.0.1:5000/api/v1/feeds/${data.id}`, {
                    method: "DELETE",
                    headers: {
                        'x-access-token': data.token
                    }
                })
                .then((news) => {
                    console.log(news)
                    ctx.commit('SET_NEWS_TO_STATE', news.data.feeds);
                    return news;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        CREATE_NEWS_ITEM(ctx, data) {
            return axios('http://127.0.0.1:5000/api/v1/feeds', {
                    method: "POST",
                    headers: {
                        'x-access-token': data.token,
                    },
                    data: {
                        'title': data.title,
                        'content': data.content,
                    }
                })
                .then((news) => {
                    ctx.commit('SET_NEWS_TO_STATE', news.data.feed);

                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        UPDATE_NEWS_ITEM_BY_ID_FROM_API(ctx, data) {
            return axios(`http://127.0.0.1:5000/api/v1/feeds/${data.id}`, {
                    method: "PUT",
                    headers: {
                        'x-access-token': data.token,
                    },
                    data: {
                        'title': data.title,
                        'content': data.content,
                    },
                })
                .then((news) => {
                    ctx.commit('SET_NEWS_TO_STATE', news.data.feed);
                    return news;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
    },
    getters: {
        NEWS(state) {
            return state.news
        }
    },

}