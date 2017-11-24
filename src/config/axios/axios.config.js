import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求返回值转成json
axios.defaults.transformResponse = [data => {
    try {
        console.log(JSON.parse(data))
        return JSON.parse(data)
    } catch (e) {
        console.error(e)
        return data
    }
}]

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(config => {
    return config
}, (error) => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    return response
}, function (error) {
    return Promise.reject(error)
})
axios.defaults.timeout = 10000 // 请求超时毫秒数

export default axios
