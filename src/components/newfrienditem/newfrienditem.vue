<template>
  <div class='useritem1' @touchstart='changebackcolor()' @touchend='changebackcolor()' :class='{changecolor1:isitemcolor}'>
      <img :src="touxiangimg" alt="">
      <div class='useritem1r'>
          <span>{{usertext}}</span>
          <div>请求添加你为好友</div>
      </div>
      <div class='istianjia'>
          <span v-show='false'>已添加</span>
          <div>添加</div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        isitemcolor:false
    }
},
methods:{
    changebackcolor(){
     this.isitemcolor=!this.isitemcolor
   }
},
props:{
    touxiangimg:'',
    usertext:''
}
}
</script>

<style scoped>
.istianjia{
    width: 50px;
    height: 20px;
    /* border:1px solid red; */
    font-size: 12px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    line-height: 20px;  
    text-align: center;
}
.istianjia div{
    width: 100%;
    height: 100%;
    /* border:1px solid red; */
    border-radius: 3px;
    background-color: rgb(0, 219, 84);
    color: white;
}
.istianjia span{
    font-size: 12px!important;
}
.useritem1{
    width: 100%;
    height: 45px;
    /* border:1px solid red; */
    /* line-height: 45px; */
    position: relative;
    background-color: white;
}
.useritem1 img{
    widows: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 10px;
    border-radius: 5px;
}
.useritem1 span{
    font-size: 13px;
    font-weight: 550;
    /* border:1px solid red; */
}
.useritem1r div{
    font-size: 5px;
    margin-top:5px;
    color:rgb(173, 173, 173) ;
}
.useritem1r{
    width: 83%;
    border-bottom: 1px solid rgb(238, 238, 238);
    height: 44px;
    position: absolute;
    right: 0;
    top: 0;
}
</style>