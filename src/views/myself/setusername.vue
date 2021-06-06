<template>
  <div class='setusername' :class="{changeboder:ischangeboder}" @click='changeboder' >
      <tobbar :tobbartext="'更改名字'" :isshowicn="false" :isshowbtn='true' :username="username" :userid="userid"></tobbar>
      <div class='shuusername'>
          <input type="text" v-model="username">
      </div>
  </div>
</template>

<script>
import tobbar from '../../components/tobbar/tobbar.vue'
export default {
    data(){
        return{
            ischangeboder:false,
            username:'',
            userid:''
        }
    },
    methods:{
        changeboder(){
            this.ischangeboder=true
        }
    },
    components: { tobbar },
    created(){
        this.$store.dispatch('getuserinfo')
        this.username=this.$store.state.userinfo.username
        this.userid=this.$store.state.userinfo._id
        console.log();
    }
}
</script>

<style>
.changeboder{
    border-bottom: 1px solid rgb(50, 255, 23);
}
.shuusername{
    width: 95%;
    margin: 0 auto;
    height: 40px;
    /* border:1px solid red; */
    margin-top: 45px;
    border-bottom: 1px solid rgb(238, 238, 238);
}
.shuusername input{
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    border:none;
    outline:none;
    font-size: 18px;
    caret-color:rgb(50, 255, 23);
}
</style>