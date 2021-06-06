<template>
  <div class='chatboxleft'>
    <div class='chatboxtouxiang'>
        <img :src="touxiangurl" alt="" @click="$router.push('/userhomepage/'+$route.params.id)">
    </div>
    <div class='chatboxs'>
      <div class='chatboxsanjiao'></div>
      <div class='chatboxchang'>{{chattext}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    chattext:'',
    touxiangurl:''
  }
}
</script>

<style>
.chatboxleft{
  /* height: 45px; */
  position: relative;
  margin-top: 10px;
}
.chatboxs{
  overflow: hidden;
  display: flex;
  /* justify-content: flex-end; */
  margin-left:70px;
}
.chatboxtouxiang img{
  width: 45px;
  height:45px;
  border-radius: 3px;
  position: absolute;
  left: 10px;
  float: left;
}
.chatboxsanjiao{
    /* background-color: rgb(255, 0, 0); */
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 15px solid rgb(255, 255, 255);
    border-bottom: 10px solid transparent;
    float: left;
    margin-left: 10px;
    position: absolute;
    top: 11px;
    left: 50px;
    border-radius: 5px;
}
.chatboxchang{
  /* min-height: 20px; */
  /* position: absolute; */
  max-width: 200px;
  font-size: 14px;
  
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  display:inline-block;
  line-height: 1.5;
  /* text-align: center; */
  padding:5px;
   white-space:normal;
   margin-top: 10px;
}
</style>