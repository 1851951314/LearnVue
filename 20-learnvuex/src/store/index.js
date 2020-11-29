import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        info: {
            name: 'zhangsan',
            age: 18
        }
        // count: 1000,
        // students: [
        //     {
        //         name: "zhangsan",
        //         age: 18,
        //     },
        //     {
        //         name: "lisi",
        //         age: 22
        //     },
        //     {
        //         name: "wangwu",
        //         age: 10
        //     },
        //     {
        //         name: "zhaoliu",
        //         age: 26
        //     }
        // ]
    },
    mutations: {
        updateMsg(state, paylode) {
            state.info['height'] = paylode.height
        }
    }
    // mutations: {
    //     // increment(state) {
    //     //     state.count++
    //     // },
    //     // decrement(state) {
    //     //     state.count--
    //     // }
    // },
    // actions: {

    // },
    // getters: {
    //     // powerCount(state) {
    //     //     return state.count * state.count
    //     // },
    //     // greatAgesCount(state) {
    //     //     return state.students.filter(s => s.age >= 20)
    //     // },
    //     // greatAgesLength(state, getters) {
    //     //     return getters.greatAgesCount.length
    //     // }
    // },
    // modules: {

    // }
})

export default store