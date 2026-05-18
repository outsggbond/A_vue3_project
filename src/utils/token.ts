//封装本地存储数组
export const setToken = (token: string) => {
    localStorage.setItem('TOKEN', token);
}

//获取本地存储数组
export const getToken = () => {
    return localStorage.getItem('TOKEN');
}