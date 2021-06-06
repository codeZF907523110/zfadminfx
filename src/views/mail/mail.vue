<template>
  <div class='wechat' >
      <div class='wechattop'></div>
      <tobbar :tobbartext="'通讯录'" :isshowicn="true"></tobbar>
      <div class='useritems'>
        <div  v-for="(item,index) in 4" :key="item.id" @click="gotonewfriend(index)">
          <keep-alive>
            <useritem :usertext="usertext[index]" :touxiangimg="touxiangimg[index]"></useritem>
          </keep-alive>
        </div>
      </div>
      <div class='useritemss' v-for="(item,index) in myfriendsuserinfo" :key="item.id">
        <useritem :touxiangimg="'http://192.168.43.39:3000/'+item.touxiangurl" :usertext="item.username" :userid="item._id" @click.native='gotochatpage(index)' @click.stop></useritem>
      </div>
  </div>
</template>
<script>
import Tobbar from '../../components/tobbar/tobbar.vue'
import Useritem from '../../components/useritem/useritem.vue'
import axios from 'axios'
export default {
  components: {  Tobbar, Useritem },
  data(){
    return{
      touxiangimg:[require('assets/img/addff.png'),require('assets/img/addff.png'),require('assets/img/addff.png'),require('assets/img/addff.png')],
      usertext:['新的朋友','群聊','标签','公众号'],
      myfriendsuserinfo:{}
    }
  },
  methods:{
    gotonewfriend(index){
      if(index==0){
        this.$router.push('/newfriends')
      }
    },
    gotochatpage(index){
      console.log(this.myfriendsuserinfo[index],'hhshshs');
      this.$router.push('/chatpage/'+this.myfriendsuserinfo[index]._id)
    }
  },
  created(){
    // this.$store.dispatch('getuserinfo')
  },
  mounted(){
    setTimeout(() => {
      console.log(this.$store.state.userinfo,'mailuserinfossssssssss');
      setTimeout(() => {
        axios.post('/getfriendtouxiang',
        {
          myfriendsid:this.$store.state.userinfo.myfriends
        }).then((res)=>{
            this.myfriendsuserinfo=res.data.myfriendsuserinfo
            console.log(this.myfriendsuserinfo);
        })
      }, 0);
      
    }, 150);
    
    
  }
  
}
</script>

<style>
.wechattop{
  height: 40px;
}
.useritems{
  padding-bottom: 10px;
}
</style>