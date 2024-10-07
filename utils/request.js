// axios 公共配置
// 基地址
axios.defaults.baseURL = 'http://geek.itheima.net'

// 2.1 设置axios请求拦截器，统一携带 token
axios.interceptors.request.use(function(config){
    const token=localStorage.getItem('token')
    // 如果token存在才给请求头设置参数
    token && (config.headers.Authorization=`Bearer ${token}`)
    return config
},function (error) {
    return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
    const result=response.data
    return result
},function (error){
    if(error?.response?.status===401){
        alert("登录状态过期，请重新登录")
        // localStorage.clear()
        location.href='../login/index.html'
    }
    return Promise.reject(error)
})