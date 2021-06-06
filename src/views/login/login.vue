<template>
  <div class='login'>
      <div class='logontop el-icon-close'>
      </div>
      <div class='phonetext'>
          手机号登录
      </div>
      <div class='logonshuru'>
          
          <div class='logonnicheng coutrys' @touchstart="coutrydown" @touchend="coutrydown" :class="{coutrysdown:coutrydownIs}">
              <span>国家/地区</span>
              <a>中国大陆(+86)</a>
          </div>
          <div class='logonnicheng'>
              <span>手机号</span>
              <input type="text" v-model="phonenumber" placeholder="请填入手机号" >
              
          </div>
      </div>
      <div class='loginmode'>
          <span @touchstart="$router.push('/elselogin')">用微信号</span>
          <span>/</span>
          <span  @touchstart="$router.push('/elselogin')">QQ号</span>
          <span>/</span>
          <span @touchstart="$router.push('/elselogin')">邮箱登录</span>
      </div>
      <div class='logonbtn' @click='phoneloginnext'>
         下一步
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

    data(){
        return{
            coutrydownIs:false,
            Isagreeshow:false,
            touxiangimgurl:'',
            file:'',
            camerashowIs:true,
            phonenumber:''
        }
    },
    methods:{
        setagrees(){
            this.Isagreeshow=!this.Isagreeshow
        },
        coutrydown(){
            this.coutrydownIs=!this.coutrydownIs
        },
        phoneloginnext(){
            axios.post('/phonelogin',{
                phonenumber:this.phonenumber
            }
            ).then((req)=>{
                if(req.data.errcode==0){
                    alert('查无此号')
                }else{
                    alert('号码正确')
                    this.$router.push('/phonelogin')
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