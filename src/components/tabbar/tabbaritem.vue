<template>
  <div class='tabbaritem'>
      <div class='tabbaritemimg'>
        <img :src="tabbarimg" alt="">
      </div>
      <div class='tabbartext'>{{tabbartext}}</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      zirouter:['wechat','mail','find','myself']
    }
  },
  props:{
    tabbarimg:String,
    tabbartext:String,
    tabbari:Number
  },
  methods:{
    // changerouter(){
    //   this.$router.push(this.zirouter[this.tabbari])
    // }
  }
}
</script>

<style>
.tabbaritem{
  flex: 1;
  width: 60px;
  height: 100%;
  /* border:1px solid red; */
  position: relative;
}
.tabbaritemimg img{
  width: 22px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 8px;
}
.tabbartext{
  width: 100%;
  text-align:center;
  margin-top: 30px;
  font-size: 11px;
}
</style>