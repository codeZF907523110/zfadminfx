<template>
  <div class='logon'>
      <div class='logontop el-icon-close'>
      </div>
      <div class='phonetext'>
          手机号注册
      </div>
      <div class='logonshuru'>
          <div class='logonnicheng'>
              <span>昵称</span>
              <input v-model="logoninformation.username" type="text" placeholder="例如:戴勤">
              <div class='settouxiang' @touchstart="settouups" @touchend="settouups" :class="{settouupc:settouupIs}">
                  <li v-show="camerashowIs" class='el-icon-camera-solid' ></li>
                  <img v-show="!camerashowIs" class='touxiangimg' :src="touxiangimgurl" alt="">
                  <input type="file" accept=".jpeg, .jpg, .png"  @change="changeimg">
              </div>
          </div>
          <div class='logonnicheng coutrys' @touchstart="coutrydown" @touchend="coutrydown" :class="{coutrysdown:coutrydownIs}">
              <span>国家/地区</span>
              <a>中国大陆(+86)</a>
              
          </div>
          <div class='logonnicheng'>
              <span>手机号</span>
              <input v-model="logoninformation.phonenumber" type="text" placeholder="请填入手机号">
              
          </div>
          <div class='logonnicheng'>
              <span>密码</span>
              <input v-model="logoninformation.password" type="text" placeholder="填入密码">
          </div>
      </div>
      <div class='isagree'>
          <li v-show='!Isagreeshow' class='el-icon-circle-check li1' @touchstart="setagrees"></li>
          <li v-show='Isagreeshow' class='el-icon-success li2' @touchstart="setagrees" ></li>
          <span class='span1'>已同意并阅读</span>
          <span class='span2'>峰峰软件许可及服务协议</span>
      </div>
      <div class='logonbtn' @click='logon'>
          注册
      </div>
      <div class='logonbtn' @click='remove'>删除</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            settouupIs:false,
            coutrydownIs:false,
            Isagreeshow:false,
            touxiangimgurl:'',
            file:'',
            camerashowIs:true,
            logoninformation:{
                username:'',
                phonenumber:'',
                country:'中国',
                password:'',
                touxiangurl:''
            }, 
        }
    },
    methods:{
        setagrees(){
            this.Isagreeshow=!this.Isagreeshow
        },
        settouups(){
            this.settouupIs=!this.settouupIs;
        },
        coutrydown(){
            this.coutrydownIs=!this.coutrydownIs
        },
        changeimg(e){
            this.camerashowIs=false;
            this.file=e.target.files[0];
            console.log(this.file);
            let url='';
            let reader=new FileReader();
            reader.readAsDataURL(this.file);//读取指定的blob或file对象
            console.log(this.file);
            let that=this;
            reader.onload=function(e){
                url = this.result.substring(this.result.indexOf(",") + 1);
                // console.log(that.logoninformation.txfile);
                that.touxiangimgurl = "data:image/png;base64," + url;
            }
        },
        logon(){
            var formdata=new FormData()
            formdata.append('touxiangfile',this.file)
            axios.post('/gettouxiang',
                formdata
            ).then((res)=>{
                console.log(res.data);
                this.logoninformation.touxiangurl=res.data
                axios.post('/logon',
                    this.logoninformation
                ).then((res)=>{
                    if(res.data.errcode==1){
                        window.alert('注册成功')
                        this.$router.push('/phonelogin')
                    }else{
                        window.alert('帐号已存在')
                    }
                })
            })
            
            
        },
        remove(){
            axios.post('/removeuser')
        }
    },
}
</script>

<style scoped>
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