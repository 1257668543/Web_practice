import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 1
}

const getters = {
    abc: (state) => {
        return state.count += 100 // 与computed不同，可以修改state中的数据
    }
}

const mutations = {
    add(state) {
        // console.log(state)
        state.count++
    },
    reduce(state) {
        state.count--
    }
}

const actions = { // 提交mutaitions里面的方法
    addAction(context) {
        context.commit('add')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})