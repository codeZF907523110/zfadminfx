<template>
  <div class='userhomepage' v-show="iscreated">
      <tobbar :tobbartext="''" :isshowicn="false"></tobbar>
      <div class='userinfoa'>
        <div class='usertouxiang'>
          <img :src="require('assets/img/touxiang.jpg')" alt="">
        </div>
        <div class='uerinfotext'>
          <div class='userinfotext1'>{{friendinfo.username}}</div>
          <div class='userinfotext2'>峰信号:{{friendinfo.accounts}}</div>
          <div class='userinfotext3'>地区:{{friendinfo.country}}</div>
        </div>
      </div>
      <!-- <div class='phonenumber' v-for="(item,index) in 4" :key="index">
          <span  class='phonespan1'>{{textitem1[index]}}</span>
          <span class='phonespan2' v-if='index==0'>13848267339</span>
      </div> -->
      <div v-for="(item,index) in textitem1" :key="index">
        <setitem :span1text="item" :span2text="phonenumber[index]"></setitem>
      </div>
      <div v-for="(item,index) in isaddtext1" :key="item.id" >
        <div class='isadd'  v-if="isaddtext1[index]!=''"  @touchstart='changebackcolor(index,0)' @touchend='changebackcolor(index,1)' :class='{changecolor1:isitemcolor==index}'>
          {{isaddtext1[index]}}
        </div>
      </div>
      
      <!-- <div class='isadd isadd2' @touchstart='changebackcolor()' @touchend='changebackcolor()' :class='{changecolor1:isitemcolor}'>
          {{isaddtext2}}
      </div> -->
  </div>
</template>

<script>
import Setitem from '../../components/setitem/setitem.vue'
import tobbar from '../../components/tobbar/tobbar.vue'
import axios from 'axios'
export default {
  data(){
    return{
      textitem1:['电话号码','设置备注和标签','个性签名','朋友圈'],
      isaddtext1:['添加到通讯录','发消息','音视频通话'],
      isitemcolor:-1,
      friendid:this.$route.params.id,
      friendinfo:{},
      phonenumber:[],
      iscreated:false,
    }
  },
  components: { tobbar, Setitem },
  methods:{
    changebackcolor(index,num){
      if(num==0){
        this.isitemcolor=index
      }else{
        this.isitemcolor=-1
        if(index==0){
          axios.post('/addmymail',{
            userid:this.friendid,
            myuserid:this.$store.state.userinfo._id
          }).then((res)=>{
            console.log(res.data.errcode);
            // alert('添加成功')
            location.reload()
          })
        }
        
      }
      
    },
    
  },
  mounted(){
      this.$store.dispatch('getuserinfo');
      
      axios.post('/getfriendinfo1',{
          userid:this.friendid,
          myuserid:this.$store.state.userinfo._id
      }
      ).then((res)=>{
          console.log(res.data.errcode,'errcode');
          console.log(res.data.ismyfriend,'hahhaha');
          if(res.data.errcode==1){
              this.friendinfo=res.data.friendinfo
              console.log(res.data.friendinfo,'friendinfo');
              this.phonenumber[0]=res.data.friendinfo.phonenumber
          }
          if(!res.data.ismyfriend){
              this.isaddtext1[1]=''
              this.isaddtext1[2]=''
          }else{
              this.isaddtext1[0]=''
          }
          if(this.$store.state.userinfo._id==this.friendid){
            this.isaddtext1[0]=''
            this.isaddtext1[1]='发消息'
            this.isaddtext1[2]=''
          }
          this.iscreated=true
      })
      
  }
  
  }
</script>
<style scoped>
.isadd2{
  margin-top: 0px!important;
}
.isadd{
  border-bottom: 1px solid rgb(238, 238, 238);
  height: 40px;
  width: 100%;
  background-color: white;
  line-height: 40px;
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(0, 76, 143);
}
.phonenumber{
  background-color: white;
  height: 40px;
  width: 100%;
  line-height: 40px;
  font-size: 15px;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.phonespan1{
  margin-left: 10px;
}
.phonespan2{
  color: rgb(0, 27, 148);
  margin-left: 20px;
}
.userinfotext1{
  font-size: 17px;
  font-weight:600;
  font-family: '微软雅黑';
}
.userinfotext3,.userinfotext2{
  color:rgb(173, 173, 173) ;
  font-size: 13px;
  margin-top: 5px;
}
.uerinfotext{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left:90px;
}
.usertouxiang{
  float: left;
}
.userhomepage{
  margin-top: 40px;
  position: relative;
}
.userinfoa{
  height: 120px;
  /* border:1px solid red; */
  width: 100%;
  background-color: white;
  position: relative;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.userinfoa .usertouxiang{
  width: 60px;
  height: 100%;
  position: relative;
}
.usertouxiang img{
  width:60px;
  height: 60px;
  border-radius:8px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10px;
}
</style>