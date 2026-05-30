// 类型定义
interface LoginBody {
  username: string
  password: string
}

interface RequestWithToken {
  headers: {
    token?: string
  }
}

interface User {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

// 用户信息数据
function createUserList(): User[] {
  return [
    {
      userId: 1,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'admin',
      password: '111111',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['user.detail'],
      routes: ['home'],
      token: 'Admin Token',
    },
    {
      userId: 2,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'system',
      password: '111111',
      desc: '系统管理员',
      roles: ['系统管理员'],
      buttons: ['user.detail'],
      routes: ['home'],
      token: 'System Token',
    },
  ]
}

export default [
  // 登录接口
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }: { body: LoginBody }) => {
      const { username, password } = body
      const userList = createUserList()
      const checkUser = userList.find(
        (item) => item.username === username && item.password === password,
      )

      if (!checkUser) {
        return {
          code: 401,
          data: { message: '用户名或密码错误' },
        }
      }

      const { token } = checkUser
      return {
        code: 200,
        data: { token },
      }
    },
  },

  // 获取用户信息接口
  {
    url: '/api/user/info',
    method: 'get',
    response: (request: RequestWithToken) => {
      const token = request.headers?.token
      if (!token) {
        return {
          code: 401,
          data: { message: '未提供 token' },
        }
      }

      const userList = createUserList()
      const checkUser = userList.find((item) => item.token === token)

      if (!checkUser) {
        return {
          code: 401,
          data: { message: '无效的 token' },
        }
      }

      const { password, ...userInfo } = checkUser
      return {
        code: 200,
        data: { checkUser: userInfo },
      }
    },
  },
]
