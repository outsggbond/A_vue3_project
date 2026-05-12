//进行axios二次封装：使用请求和网络拦截器
import { ElMessage } from 'element-plus';
import axios from 'axios'
//第一步：利用axios对象创建create 方法，去创建axios实例（可以配置其他配置）
let request = axios.create({
    //基础路径
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
})
//第二步：ruquest实力添加请求与响应拦截器
request.interceptors.request.use((config) => {
    //config配置对象，h
    //返回配置对象
    return config;
})

//第三步:响应拦截器
request.interceptors.response.use((response) => {
    //成功的回调
    //简化数据
    return response.data;
}, (error) => {
    //失败的回调
    //定义一个变量
    let message = ' ';
    let status = error.response.status;
    switch (status) {
        case 401:
            message = "token过期"
            break;
        case 403:
            message = "你无权访问"
            break;
        case 404:
            message = "请求地址错误"
            break;
        case 500:
            message = "服务器出现问题"
            break;
        default:
            message = "网络出现问题"
            break;

    }

    ElMessage({
        type:'error',
        message
    })

    return Promise.reject(error)
})

export default request