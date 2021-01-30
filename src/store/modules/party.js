const state = {
    venusDetail: null,
    login:false
}

const mutations = {
    changeVenusDetail(state, payload) {
       state.venusDetail = payload
    },
    isLogin(state,payload){
        state.login = payload
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
