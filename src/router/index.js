import Vue from 'vue'
import VueRouter from 'vue-router'
import tabbar from '../components/tabbar/tabbar.vue'
import logon from '../views/logon/logon.vue'
import login from '../views/login/login.vue'
import elselogin from '../views/login/elselogin.vue'
import phonelogin from '../views/login/phonelogin.vue'
import myselfinfo from '../views/myself/myselfinfo.vue'
import Wechat from '../views/displaypage/displaypage.vue'
import setusername from '../views/myself/setusername'
import addfriends from '../components/addfriends/addfriends'
import searchfriend from '../components/addfriends/searchfriend'
import userhomepage from '../components/userhomepage/userhomepage'
import newfriends from '../views/mail/newfriends/newfriends'
import chatpage from '../components/chatpage/chatpage'
Vue.use(VueRouter)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [{
        path: '/',
        redirect: '/wechat/page0'
    },{
        path:'/newfriends',
        component:newfriends
    },{
        path:'/chatpage/:id',
        component:chatpage
    },{
        path:'/addfriends',
        component:addfriends
    },{
        path:'/userhomepage/:id',
        component:userhomepage
    },{
        path:'/addfriends/searchfriend',
        component:searchfriend
    },{
        path:'/myself/setusername',
        component:setusername
    },{
        path:'/Wechat/:id',
        component:Wechat
    },
    {
        path: '/myself/myselfinfo',
        component: myselfinfo
    },
    {
        path: '/logon',
        component: logon
    }, {
        path: '/phonelogin',
        component: phonelogin
    }, {
        path: '/elselogin',
        component: elselogin
    }, {
        path: '/login',
        component: login
    },
    {
        path: '/tabbar',
        component: tabbar,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router