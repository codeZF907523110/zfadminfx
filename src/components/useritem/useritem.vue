<template>
  <div class='useritem' @touchstart='changebackcolor()' @touchend='changebackcolor()' :class='{changecolor1:isitemcolor}'>
      <img :src="touxiangimg" alt="" @click='gotouserhome()' @click.stop>
      <div class='useritemr'>
          <span>{{usertext}}</span>
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
   },
   gotouserhome(){
       if(this.userid){
           console.log(this.usertext,'lalallalalalla');
            this.$router.push('/userhomepage/'+this.userid)
       }
       
   }
},
props:{
    touxiangimg:'',
    usertext:'',
    userid:''
}
}
</script>

<style>
.useritem{
    width: 100%;
    height: 45px;
    /* border:1px solid red; */
    line-height: 45px;
    position: relative;
    background-color: white;
}
.useritem img{
    width: 40px;
    /* height: 40px; */
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 10px;
    border-radius: 5px;
}
.useritem span{
    font-size: 13px;
    font-weight: 550;
    /* border:1px solid red; */
}
.useritemr{
    width: 83%;
    border-bottom: 1px solid rgb(238, 238, 238);
    height: 44px;
    position: absolute;
    right: 0;
    top: 0;
}
</style>