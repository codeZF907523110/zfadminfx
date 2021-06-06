<template>
  <div class='chatboxright'>
    <div class='chatboxrtouxiang'>
        <img :src="'http://192.168.43.39:3000/'+$store.state.userinfo.touxiangurl" alt="" @click="$router.push('/userhomepage/'+$store.state.userinfo._id)">
    </div>
    <div class='chatboxss'>
      <div class='chatboxssanjiao'></div>
      <div class='chatboxchangs'>{{chattext}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    chattext:''
  },
  created(){
    this.$store.dispatch('getuserinfo')
  }
}
</script>

<style>
.chatboxright{
  /* height: 45px; */
  position: relative;
  margin-top: 10px;
}
.chatboxss{
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  margin-right:70px;
}
.chatboxrtouxiang img{
  width: 45px;
  height:45px;
  border-radius: 3px;
  position: absolute;
  right: 10px;
  float: left;
}
.chatboxssanjiao{
    /* background-color: rgb(255, 0, 0); */
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 15px solid rgb(82, 235, 62);
    border-bottom: 10px solid transparent;
    float: left;
    margin-right: 10px;
    position: absolute;
    top: 11px;
    right: 50px;
    border-radius: 5px;
}
.chatboxchangs{
  /* position: absolute; */
  max-width: 200px;
  font-size: 14px;
  
  border-radius: 5px;
  background-color: rgb(82, 235, 62);
  display:inline-block;
  line-height: 1.5;
  /* text-align: center; */
  padding:5px;
   white-space:normal;
   margin-top: 10px;
}
</style>