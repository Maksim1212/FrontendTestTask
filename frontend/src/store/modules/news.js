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
        GET_NEWS_ITEM_BY_ID_FROM_API(commit, id) {
            return axios(`http://127.0.0.1:5000/api/v1/feeds/${id}`, {
                    method: "GET",
                })
                .then((news) => {
                    commit('SET_NEWS_TO_STATE', news.data.feed);
                    return news;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        DELETE_NEWS_ITEM_BY_ID_FROM_API(commit, id) {
            return axios(`http://127.0.0.1:5000/api/v1/feeds/${id}`, {
                    method: "DELETE",
                    headers: {
                        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTY0NTAwNzUsImlkIjoiNWYyNDM4ZGUzNTRmMjEyNGU3N2M4NzI3IiwiaWF0IjoxNTk2NDQ2NDc1fQ.f9M_JepB6UF39YKagdh_p-d-wckvYBox2ORh7MPtT1g'
                    }
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
    },
    getters: {
        NEWS(state) {
            return state.news
        }
    },

}