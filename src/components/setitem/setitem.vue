<template>
  <div class='setitem' @touchstart='changebackcolor()' @touchend='changebackcolor()' :class='{changecolor1:isitemcolor}'>
      <div class='setitemli'>
          <span class='setspan1'>{{span1text}}</span>
          <i class='seti el-icon-arrow-right'></i>
          <span class='setspan2' v-show='span2text'>{{span2text}}</span>
          <img :src="imgurl" alt="" v-show='imgurl'>
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
     span1text:'',
     span2text:'',
     imgurl:''
 }
}
</script>

<style>

.setitem{
    height: 45px;
    width: 100%;
    background-color: white;
}
.setitemli{
    width: 95%;
    float: right;
    height:44px;
    line-height: 45px;
    border-bottom: 1px solid rgb(238, 238, 238);
    position: relative;
    }
.setspan1{
    color: #333;
}
.setspan2{
    color: rgb(209, 209, 209);
    font-size: 14px;
    float: right;
    margin-right: 30px;
}
.seti{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    color:rgb(209, 209, 209) ;
}
.setitemli img{
    width: 35px;
    height: 35px;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
}
</style>