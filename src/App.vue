<template>
  <div id="app">
    <router-view />
    <!-- <tabbar></tabbar> -->
  </div>
</template>
<script>
// import tabbar from './components/tabbar/tabbar.vue'

export default {
  // components: { tabbar },
  data(){
    return{
      msgarr:[],
      allmsgarr:[]
    }
  },
  mounted() {
      window.addEventListener('unload', this.saveState)
      this.socket.on('getmsgfromserve',(res)=>{
        // console.log(socket.id,'ddddddddddi');
        console.log(res.userid1,'msg');
        this.msgarr.unshift(res.msg)
        // console.log(res.userid2,'userid');
        console.log(this.msgarr.length,'msgarr');
        var chatallid=res.userid1+''+res.userid2
        var chatjilu=localStorage.getItem(chatallid)
        // console.log(chatjilu,'chatjilu');
        if(chatjilu){
          this.msgarr=localStorage.getItem(chatallid)+'!@#$'+this.msgarr
          localStorage.setItem(chatallid,this.msgarr)
          var msgtooneto=localStorage.getItem(chatallid)
          this.allmsgarr=msgtooneto.split('!@#$')
          this.$store.commit('updatamsgonetoone',this.allmsgarr)
          setTimeout(() => {
            window.scrollTo(100000000,1000000000)
          }, 100);
          this.msgarr=[]
        }else{
          localStorage.setItem(chatallid,this.msgarr)
          var msgtooneto=localStorage.getItem(chatallid)
          this.allmsgarr=msgtooneto.split('!@#$')
          this.$store.commit('updatamsgonetoone',this.allmsgarr)
          this.msgarr=[]
        }
        console.log(localStorage.getItem(chatallid),'localstorage');
      })
      // this.socket.on('')
      
  },
  methods: {
      saveState() {
          sessionStorage.setItem('state', JSON.stringify(this.$store.state))
      }
  },
  created(){
    this.$store.dispatch('getuserinfo')
  }
}
</script>
<style>
  html,body{
    margin: 0;
    padding: 0;
    background-color: rgb(245, 245, 245);
    user-select: none;
    overflow: scroll;
  };
  body{
  margin:0;
  }
  html::-webkit-scrollbar, body::-webkit-scrollbar{width:0px;height:0px;}

</style>
