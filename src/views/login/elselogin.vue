<template>
  <div class='login'>
      <div class='logontop el-icon-close' @touchstart="$router.go(-1)">
      </div>
      <div class='phonetext'>
          微信号/QQ号/邮箱登录
      </div>
      <div class='logonshuru'>
          <div class='logonnicheng'>
              <span>帐号</span>
              <input v-model="logininformation.accounts" type="text" placeholder="请填入微信号/QQ号/邮箱登录">
          </div>
          <div class='logonnicheng'>
              <span>密码</span>
              <input v-model="logininformation.password" type="text" placeholder="请填入密码">
          </div>
      </div>
      <div class='loginmode'>
          <span>用手机登陆</span>
          
      </div>
      <div class='logonbtn' @click='login'>
         登录
      </div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL='http://127.0.0.1:3000'
export default {
    data(){
        return{
            coutrydownIs:false,
            Isagreeshow:false,
            touxiangimgurl:'',
            file:'',
            camerashowIs:true,
            logininformation:{
                accounts:'',
                password:''
            }
        }
    },
    methods:{
        setagrees(){
            this.Isagreeshow=!this.Isagreeshow
        },
        coutrydown(){
            this.coutrydownIs=!this.coutrydownIs
        },
        login(){
            axios.post('/login',
                this.logininformation
            ).then((res)=>{
                console.log(res.data.errcode,'res');
                let errcode=res.data.errcode
                if(errcode==0){
                    alert('账号不存在')
                }else if(errcode==1){
                    alert('账号密码错误')
                }else{
                    alert('登陆成功')
                    this.$router.push('/tabbar')
                }
            })
        }
    }
}
</script>

<style scoped>
.loginmode{
  margin-top: 10px;
  margin-bottom: 10px;
}
.loginmode span{
  color: rgb(29, 0, 134);
  font-size: 14px;
  margin-left: 10px;
  padding-top: 20px!important;
}
.touxiangimg{
    width: 50px;
    
}
.settouxiang input{
    position: absolute!important;
    left: 0!important;
    width: 50px;
    height: 50px;
    opacity: 0;
}
.logonbtn2{
    background-color:rgb(0, 197, 89) ;
    color: white;
}
.logonbtn{
    width: 95%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: rgb(238, 237, 237);
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 10px;
    color:rgb(184, 184, 184) ;
}
.isagree li{
    font-size: 14px;
}
.isagree .li2{
    color:rgb(0, 197, 89) ;
}
.isagree .span1{
    color: rgb(204, 204, 204);
    margin-left: 5px;
}
.isagree .span2{
    color: rgb(0, 6, 94);
    margin-left: 5px;
}
.isagree{
    height:20px;
    line-height: 20px;
    text-align: center;
    margin-top: 10px;
    font-size: 13px;
}
.coutrysdown{
    background-color: rgb(211, 211, 211);
}
.logonnicheng a{
    color: rgb(0, 197, 89);
    font-size:14px ;
    position: absolute;
    left: 70px;
    font-weight: 500;
}
.settouupc{
    background-color:rgb(0, 197, 89)!important;
}
.settouxiang li{
    color: white;
    font-size: 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.settouxiang{
    width: 50px;
    height: 50px;
    background-color: rgb(236, 236, 236);
    position: absolute;
    right: 0;
    top: -10px;
}
.phonetext{
    margin-top: 10px;
    margin-left: 10px;
}
.logonshuru{
    width: 95%;
    margin: 0 auto;
    /* border:1px solid red; */
    margin-top:20px;
}
.logonnicheng{
    height: 40px;
    line-height: 40px;
    /* width: 80%; */
    border-bottom: 1px solid rgb(233, 233, 233);
    position: relative;
    margin-top: 5px;
}
.logonnicheng span{
    float: left;
    font-size: 13px;
}
.logonnicheng input{
    border:none;
    outline:medium;
    /* float: left; */
    position: absolute;
    left: 70px;
    top: 50%;
    transform: translateY(-50%);
}
.logontop{
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    margin-top: 10px;
    margin-left: 10px;
    }
</style>