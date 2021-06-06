<template>
  <div class='wechat'>
      <div class='wechattop'></div>
      <tobbar :tobbartext="'微信'" :isshowicn="true"></tobbar>
      <div>微信</div>
      <div>登录次数:{{$store.state.aaa}}</div>
  </div>
</template>

<script>
import Tobbar from '../../components/tobbar/tobbar.vue'
import axios from 'axios'
export default {
  components: { Tobbar },
   data(){
    return{
      // isvisit:this.$store.state.isvisit
    }
  },
  created(){
    axios.get('/'
    ).then(res=>{

    })
  }
}
</script>

<style>
.wechattop{
  height: 40px;
}
</style>