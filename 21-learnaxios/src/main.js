import { createApp } from 'vue'
import App from './App.vue'

// import axios from 'axios'

createApp(App).mount('#app')

// 1.axios基本语法
// axios({
//     url: 'http://152.136.185.210:8000/api/w6/home/multidata',
//     // method: 'post'
// }).then(res => {
//     console.log(res);
// })

// axios({
//     // url: 'http://123.207.32.32:8000/home/data?type:pop&page:1'
//     url: 'http://152.136.185.210:8000/api/w6/home/data',
//     // 专门针对get请求的参数拼接
//     params: {
//         type: 'pop',
//         page: 1
//     }
// }).then(res => {
//     console.log(res);
// })

// 2.axios发送并发请求
// axios.all([
//     axios({
//         url: 'http://152.136.185.210:8000/api/w6/home/multidata',
//     }),
//     axios({
//         url: 'http://152.136.185.210:8000/api/w6/home/data',
//         params: {
//             type: 'sell',
//             page: 5
//         }
//     })
// ]).then(result => {
//     console.log(result);
// })

// axios.all([
//     axios({
//         url: 'http://152.136.185.210:8000/api/w6/home/multidata',
//     }),
//     axios({
//         url: 'http://152.136.185.210:8000/api/w6/home/data',
//         params: {
//             type: 'sell',
//             page: 5
//         }
//     })
// ]).then(axios.spread((res1, res2) => { // 使用 axios.spread 可将数组 [res1, res2] 展开为 res1, res2
//     console.log(res1);
//     console.log(res2);
// }))

// 3.axios全局配置——使用全局的axios和配置进行网络请求
// axios.defaults.baseURL = 'http://152.136.185.210:8000/api/w6' // 设置baseURL
// axios.defaults.timeout = 5000 // 设置请求超时时间为5秒

// axios.all([
//     axios({
//         url: '/home/multidata',
//     }),
//     axios({
//         url: '/home/data',
//         params: {
//             type: 'sell',
//             page: 5
//         }
//     })
// ]).then(axios.spread((res1, res2) => { // 使用 axios.spread 可将数组 [res1, res2] 展开为 res1, res2
//     console.log(res1);
//     console.log(res2);
// }))

// 4.创建对应的axios实例
// const instance1 = axios.create({
//     baseURL: 'http://152.136.185.210:8000/api/w6',
//     timeout: 5000
// })

// instance1({
//     url: '/home/multidata',
// }).then(res => {
//     console.log(res);
// })

// instance1({
//     url: '/home/data',
//     params: {
//         type: 'pop',
//         page: 1
//     }
// }).then(res => {
//     console.log(res);
// })

// 5.axios的模块封装
import { request } from './network/request'

request({
    url: '/home/multidata',
}).then(res => {
    console.log(res)
}).catch(console.log('error'))

request({
    url: '/home/data',
    params: {
        type: 'pop',
        page: 1
    }
}).then(res => {
    console.log(res);
}).catch(console.log('error'))