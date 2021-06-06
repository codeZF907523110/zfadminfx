<template>
  <div class='tobbar'>
      <i class='el-icon-arrow-left' v-show='!isshowicn' @click='$router.back()'></i>
      <span>{{tobbartext}}</span>
      <div class='tobbarimg' v-show='isshowicn'>
          <div class='img1'><img src="../../assets/img/serch.png" alt=""></div>
          
          <div class='img2'>
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img src="../../assets/img/add.png" alt="">
                </span>
                <el-dropdown-menu slot="dropdown" class='eldropdown'>
                    <div v-for="(item,index) in findactive" :key='index' @click='eldropdownlic(index)'>
                        <el-dropdown-item class='eldropdownli' >{{item}}</el-dropdown-item>
                    </div>
                    
                </el-dropdown-menu>
            </el-dropdown>
          </div>
          
      </div>
      <!-- <div class='openfind'>

      </div> -->
      <div class='saveusername' v-if='isshowbtn==true' @click='saveusername'>
          保存
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            findactive:['发起群聊','添加朋友','扫一扫','收付款','帮助与反馈']
        }
    },
    props:{
        tobbartext:String,
        isshowicn:Boolean,
        isshowbtn:Boolean,
        username:String,
        userid:String
    },
    methods:{
        saveusername(){
            axios.post('/saveusername',{
                username:this.username,
                userid:this.userid
            }).then((res)=>{
                console.log(res,11111111111);
            })
        },
        eldropdownlic(index){
            if(index==1){
                this.$router.push('/addfriends')
            }
        }
    }
}
</script>

<style>
.tobbarimg .img1{
    float: left;
}
.tobbarimg .img2{
    float: left;
}
.eldropdownli{
    color: white!important;
}
.eldropdown{
    width: 120px!important;
    text-align: center;
    position: absolute!important;
    right: 20px;
    top: 35px!important;
    background-color: #333!important;
    color: white!important;
}
.popper__arrow::after{
    border-bottom-color: #333!important;
}
.openfind{
    height: 200px;
    width: 100px;
    border:1px solid red;
    position: absolute;
    right: 0;
}
.saveusername{
    position: absolute;
    right:5px;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 20px;
    font-weight: 600;
    font-size: 12px;
    color: white;
    border-radius: 5px;
    background-color: rgb(0, 226, 0);
    line-height: 20px;
    text-align: center;
}
.tobbar i{
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 600;
}
.tobbarimg{
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
    right: -10px;
}
.tobbarimg img{
    width:15px;
    margin-right: 20px;
}
.tobbar{

    position: fixed;
    top: 0;
    font-weight: 600;
    text-align: center;
    height: 40px;
    width: 100%;
    line-height: 40px;
    background-color: rgb(248, 248, 248);
    z-index: 1000;
}
</style>