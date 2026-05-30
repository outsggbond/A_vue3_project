//路由鉴权，项目当中路由能不能呗权限的设置（某一个路由什么条件下可以给访问，什么条件下不能被访问
import router  from "./router";
import nprogress from 'nprogress';

//引入进度条得样式
import "nprogress/nprogress.css"

//全局守卫：当项目中任意路由切换都会触发的钩子
//全局的前置守卫
router.beforeEach((to:any,from:any,next:any)=>{
//访问某一个路由之前的守卫
//to：访问的路由对象
//from:你从那个路由而来
//next:路由的放行函数
nprogress.start();
next();
})



//全局的后置守卫
router.afterEach((to,from,next)=>{
nprogress.done();

})

//第一个问题：任意路由切换实现进度条业务