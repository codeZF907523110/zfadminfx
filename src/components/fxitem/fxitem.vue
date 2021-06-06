<template>
  <div class='fxitem' @touchstart='changebackcolor()' @touchend='changebackcolor()' :class='{changecolor1:isitemcolor}'>
      <div class='fxitemli'>
          <img :src="fxitemimg" alt="">
          <div class='fxitemtexts'>
            <div class='fxitemtext'>{{fxitemtext}}</div>
            <i class='el-icon-arrow-right'></i>
          </div>
          
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
 props:{
   fxitemimg:String,
   fxitemtext:String
 },
 methods:{
   changebackcolor(){
     this.isitemcolor=~this.isitemcolor
   }
 }
}
</script>

<style>
.changecolor1{
  background-color: rgba(184, 184, 184,0.2)!important;
}
.fxitemtexts{
  height: 100%;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.fxitem{
  width: 100%;
  height: 40px;
  background-color: white;
  /* border:1px solid red; */
  line-height: 40px;
}
.fxitemli{
  width: 95%;
  height: 100%;
  margin: 0 auto;
  font-size: 13px;
  position: relative;
}
.fxitemli img{
  width: 20px;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
}
.fxitemtext{
  float: left;
  /* font */
  margin-left: 40px;
  font-weight: 600;
}
.fxitemli i{
  float: right;
  margin-right: 10px;
  height: 100%;
  line-height: 40px;
}
</style>