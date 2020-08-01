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
        }
    },
    getters: {
        NEWS(state) {
            return state.news
        }
    },

}