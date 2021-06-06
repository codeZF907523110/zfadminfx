<template>
  <div class='login'>
      <div class='logontop el-icon-close' @touchstart="$router.go(-1)">
      </div>
      <div class='phonetext'>
          手机号登录
      </div>
      <div class='logonshuru'>
          <div class='logonnicheng'>
              <span>手机号</span>
              <input v-model="logininformation.accounts" type="text" >
          </div>
          <div class='logonnicheng'>
              <span>密码</span>
              <input v-model="logininformation.password" type="text" placeholder="请填入密码">
          </div>
      </div>
      <div class='loginmode'>
          <span>手机验证登录</span>
          
      </div>
      <div class='logonbtn' @click='login'>
         登录
      </div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL="http://192.168.43.39:3000"
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
        setCookie: function (cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                console.info(cname + "=" + cvalue + "; " + expires);
                document.cookie = cname + "=" + cvalue + "; " + expires;
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
                    this.$router.push('/wechat/page0')
                    this.setCookie("username", this.logininformation.accounts, 365);
                    this.$cookies.set('fxusername',this.logininformation.accounts,60 * 60 * 24 * 30)
                    console.log(this.$cookies.get('fxusername'));
                }
            })
        },
        
    },
    created(){
        axios.post('/intophonelogin'
        ).then((res)=>{
            console.log(res.data.phonenumber,res);
            this.logininformation.accounts=res.data.phonenumber
        })
    }
}
</script>

<style scoped>
.loginmode{
    font-size: 12px;
    margin-left: 10px;
    margin-top: 10px;
    color: rgb(89, 0, 148);
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
.logon{
    width: 100vw;
    height: 100vh;
}
</style>