<template>
  <div class='chatpagebot'>
    <div class='pagebotleft'>
      <img class='img1' :src="require('assets/img/yuyin.png')" alt="" >
      <div class='chatsend' :class='{changesend:isdisappear}' @click='sendmessage()'>发送</div>
    </div>
    <div class='pagebotcenter'>
      <input type="text" name="" id="" v-model="chatcontent" :class='{changeweizhi1:isdisappear}'>
    </div>
    <div class='pagebotright'>
      <img class='img2' :src="require('assets/img/xiaolian.png')" alt="" :class='{changeweizhi2:isdisappear}'>
      <img class='img3' :src="require('assets/img/add.png')" alt="" :class='{disappear:isdisappear}'>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      chatcontent:'',
      isdisappear:false,
      userinfo:{},
      msgarr:[],
      allmsgarr:'',
      chatallid:this.$route.params.id+this.$store.state.userinfo._id
    }
  },
  props:{
    socket:{}
  },
  watch:{
    chatcontent(){
      if(this.chatcontent!=''){
        this.isdisappear=true
      }else{
        this.isdisappear=false
      }
    }
  },
  methods:{
    sendmessage(){
      console.log(this.socket.id,'iiiiid');
      this.socket.emit("sendmsgtoserve",{
        msg:this.chatcontent,
        userid2:this.$route.params.id,
        usersocket:this.socket.id,
        userid1:this.userinfo._id
      })
        var chatjilu=localStorage.getItem(this.chatallid)
        if(chatjilu){
          this.msgarr=localStorage.getItem(this.chatallid)+'!@#$'+this.userinfo._id+''+this.chatcontent
          //放入
          localStorage.setItem(this.chatallid,this.msgarr)
          //得到
          var msgtooneto=localStorage.getItem(this.chatallid)
          //拼接
          this.allmsgarr=msgtooneto.split('!@#$')
          this.$store.commit('updatamsgonetoone',this.allmsgarr)
          setTimeout(() => {
            window.scrollTo(100000000,1000000000)
          }, 100);
          console.log(localStorage.getItem(this.chatallid));
          this.msgarr=[]
        }else{
          localStorage.setItem(this.chatallid,this.userinfo._id+''+this.chatcontent)
          this.$store.commit('updatamsgonetoone',localStorage.getItem(this.chatallid))
          var msgtooneto=localStorage.getItem(this.chatallid)
          this.allmsgarr=msgtooneto.split('!@#$')
          this.$store.commit('updatamsgonetoone',this.allmsgarr)
          this.msgarr=[]
          
        }
        // console.log(localStorage.getItem(chatallid),'localstorage');
        // localStorage.setItem(this.chatallid,'')
        this.chatcontent=''
    }
  }
  ,
  created(){
    this.$store.dispatch('getuserinfo')
    this.userinfo=this.$store.state.userinfo
    var msgtooneto=localStorage.getItem(this.chatallid)
    this.allmsgarr=msgtooneto.split('!@#$')
    this.$store.commit('updatamsgonetoone',this.allmsgarr)
    
  }
}
</script>

<style>
  .chatsend{
    width:55px;
    height: 30px;
    /* border:1px solid red; */
    line-height: 30px;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgb(0, 209, 28);
    font-size: 12px;
    color: white;
    border-radius: 3px;
    right: -57px;
    z-index: 1000;
  }
  .changesend{
    transition: 0.3s;
    right: 5px;
  }
  .disappear{
    opacity: 0;
    transition: 0.3s;
  }
  .changeweizhi1{
    transition: 0.3s;
    width: 59%!important;
  }
  .changeweizhi2{
    transition: 0.3s;
    right: 68px!important;
  }
  .chatpagebot{
    height: 40px;
    width: 100%;
    overflow: hidden;
    /* border:1px solid red; */
    position: absolute;
    bottom: 0;
    background-color: rgb(241, 241, 241);
    line-height: 40px;
    position: fixed;
  }
  .chatpagebot img{
    width: 25px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .chatpagebot .img1{
    width: 25px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    transition: 0.3s;
  }
  .chatpagebot .img2{
    right: 45px;
    transition: 0.3s;
  }
  .chatpagebot .img3{
    right: 10px;
    transition: 0.3s;
  }
  .pagebotcenter input{
    border:none;
    background-color: white;
    width: 65%;
    height: 28px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 40px;
    border-radius: 3px;
    outline: none;
    transition: 0.3s;
  }
</style>