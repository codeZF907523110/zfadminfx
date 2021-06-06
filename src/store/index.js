import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//安装插件
Vue.use(Vuex)
    //实例化
const store = new Vuex.Store({
    state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')): {
        aaa: 0,
        userinfo:{},
        msgonetoone:[]
        
    },
    mutations:{
        getuserinfo(state,req){
            state.userinfo=req.data.userinfo
            // console.log(state.userinfo);
        },
        updatamsgonetoone(state,msg){
            state.msgonetoone=msg
        }
    },
    actions: {
        getuserinfo(context) {
            axios.post('/getuserinfo',{
                fxusername:$cookies.get('fxusername')
             }).then((req)=>{
                 context.commit('getuserinfo',req) 
             })
        }
    }
     
})
export default store