<template>
  <div class='chatpage'>
      <!-- {{this.$store.state.msgonetoone}}hhhhh -->
      <!-- {{thisallmsg}} -->
      <keep-alive>
          <tobbar :tobbartext="myfriendsuserinfo.username" :isshowicn="false"></tobbar>
      </keep-alive>
      <div class='chatcontent'>
        <riqibox></riqibox>
        <div class='chatboxcontent' v-for="(item) in $store.state.msgonetoone" :key="item.id" v-show="$store.state.msgonetoone.length>1">
          <div v-if="item.substring(0,24)==firendid&&myfriendsuserinfo.touxiangurl">
            <chatboxleft :touxiangurl="webid+myfriendsuserinfo.touxiangurl" :chattext="item.substring(24)"></chatboxleft>
          </div>
          <div v-else>
            <chatboxright :chattext="item.substring(24)"></chatboxright>
          </div>
          <!-- {{item.substring(0,24)}} -->
          <!-- hshshshhhhhh -->
        </div>
        
        
        <keep-alive>
          <chatpagebot :socket="socket"></chatpagebot>
        </keep-alive>
      </div>
  </div>
</template>

<script>
import tobbar from '../tobbar/tobbar.vue'
import axios from 'axios'
import Chatpagebot from './chatpagebot.vue'
import Chatboxleft from './chatboxleft.vue'
import Chatboxright from './chatboxright.vue'
import Riqibox from './riqibox.vue'
// import soc from 'socket.io/client-dist/socket.io'
// 
export default {
  data(){
    return{
      myfriendsuserinfo:{},
      msgarr:[],
      allmsgarr:[],
      myid:this.$store.state.userinfo._id,
      firendid:this.$route.params.id,
      webid:'http://192.168.43.39:3000/',
      // socket:soc.io.connect('http://192.168.43.39:3000'),
      // thisallmsg:this.$store.state.msgonetoone
    }
  },
  components: { tobbar, Chatpagebot, Chatboxleft, Chatboxright, Riqibox },
  created(){
        // console.log(this.myfriendsuserinfo);
        this.$store.dispatch('getuserinfo')
        
        axios.post('/getfriendinfo1',
          {
            userid:this.$route.params.id,
            codesend:1
          }
        )
        .then((res)=>{
          // console.log(res.data); 
          this.myfriendsuserinfo=res.data.friendinfo
         window.scrollTo(100000000,1000000000)
          
          console.log(this.myfriendsuserinfo.touxiangurl);
        })
        
        // // var thisallmsg=localStorage.getItem(this.firendid+this.myid)
        // if(this.thisallmsg){
        //   console.log(this.thisallmsg);
        //   this.allmsgarr=this.thisallmsg.split('!@#$')
        // }
    
     },
    // //将自己的socketid保存至数据库
    // setTimeout(() => {
    //   axios.post('/savesocketid',{
    //     socketid:this.socket.id,
    //     myid:this.$store.state.userinfo._id
    //   })
    //   console.log(this.socket.id,'iddddd');
    // }, 200);
    //获取对方的socketid
    // axios.post('/getothersocketid',{
    //   userid:this.$route.params.id
    // }).then((res)=>{
    //   console.log(res.data);
    // })
   
  mounted(){
        // var thisallmsg=localStorage.getItem(this.firendid+this.myid)
        // if(this.thisallmsg){
        //   this.allmsgarr=this.thisallmsg.split('!@#$')
        // }
        // console.log(this.$store.state.msgonetoone);
  },
  // watch:{
  //   thisallmsg(){
  //     console.log('aaaaaaaaaaaaa');
  //   }
  // }
}
</script>

<style>
.chatcontent{
  margin-top: 50px;
  margin-bottom: 40px;
}
</style>