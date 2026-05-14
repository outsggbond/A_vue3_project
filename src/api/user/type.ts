//登录接口需要携带参数的ts类型

export interface loginForm{
    username:string,
    password:string
}

interface dataType{
    token:string
}

//登录接口返回的数据类型
export interface loginResponseData{
    code:number,
    data:dataType
}

interface userInfo {
  userId: number;          // 示例中是数字 1
  avatar: string;          // 你明确要求的 string
  username: string;        // 'admin'
  password: string;        // '111111'
  desc: string;            // '平台管理员'
  roles: string[];         // ['平台管理员']
  buttons: string[];       // ['user.detail']
  routes: string[];        // ['home']
  token: string;           // 'Admin Token'
}

interface user{
    checkUser:userInfo
}

//定义服务器返回用户信息相关的类型

export interface userResponseData{
    code:number,
    data:user
}