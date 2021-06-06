<template>
  <div class='myselfinfo'>
      
      <tobbar :tobbartext="'个人信息'" :isshowicn="false"></tobbar>
      
      <div class='infoitemli'>
        <div v-for="(item,index) in setitemspan1" :key='index' @click='setitemclick(index)'>
          <div class='modifytouxiang' v-if='index==0'><input ref='inputimg' type="file" accept="image/x-png,image/gif,image/jpeg,image/bmp,image/webp"  @change='changeimg'></div>
          <keep-alive>
            <setitem :span1text="item" :imgurl="setimgurl[index]" :span2text="setitemspan2[index]"></setitem>
          </keep-alive>
          <div class='kongge' v-show='index==6||index==5'></div>
        </div>
      </div>
      <div class='showtouxiang' v-show='ishowtouxiang'>
        <div class='showtouxiangli'>
          <img :src="touxiangimgurl" alt="">
        </div>
        <div class="touxiangtext" >
          <div class='touxiangtext1' @click='distouxiang'>取消</div>
          <div class='touxiangtext1 touxiangtext2' @click='suretouxiang2'>确定</div>
        </div>
      </div>
  </div>
</template>

<script>
import setitem from '../../components/setitem/setitem.vue'
import Tobbar from '../../components/tobbar/tobbar.vue'
import axios from 'axios'
export default {
  data(){
    return{
      setitemspan1:['头像','昵称','拍一拍','峰信号','二维码名片','更多','峰信豆','我的地址'],
      setimgurl:['http://192.168.43.39:3000/'+this.$store.state.userinfo.touxiangurl],
      setitemspan2:['',this.$store.state.userinfo.username,'叫爸爸','adcedsvfttfbgt'],
      ishowtouxiang:false,
      userinfo:{},
      touxiangimgurl:'',
      file:''
    }
  },
  components: { setitem, Tobbar },
  methods:{
    setitemclick(index){
      if(index==0){
        this.$refs.inputimg[0].click()
      }else if(index==1){
        this.$router.push('/myself/setusername')
      }
    },
    changeimg(e){
      this.ishowtouxiang=true
      this.file=e.target.files[0]
      let url=''
      let reader=new FileReader()
      reader.readAsDataURL(this.file);
        let that=this
        reader.onload=function(){
          url = this.result.substring(this.result.indexOf(",") + 1);
          that.touxiangimgurl = "data:image/png;base64," + url;
        }
    },
    distouxiang(){
      this.ishowtouxiang=false
      this.$refs.inputimg[0].value=''
    },
    suretouxiang2(){
      this.ishowtouxiang=false
      this.$refs.inputimg[0].value=''
      let formdata=new FormData()
      formdata.append('touxiangfile',this.file)
      
        axios.post('/gettouxiang',
          formdata
        ).then((res)=>{
            axios.post('/savetouxiang',{
              userid:this.userinfo._id,
              imgurl:res.data
            }
            ).then((res)=>{
            })
        })
        
    }
  },
  created(){
        this.$store.dispatch('getuserinfo')
        this.userinfo=this.$store.state.userinfo
  },
}
</script>

<style>
.touxiangtext{
  display: flex;
  width: 100%;
  justify-content:space-around;
  align-self:flex-end;
  position: absolute;
  bottom: 15px;
}
.touxiangtext2{
  width: 60px;
  height: 25px;
  line-height: 25px;
  /* border:1px solid red; */
  border-radius: 5px;
  background-color: rgb(0, 160, 80);
  text-align: center;
}
.touxiangtext1{
  flex-direction: row;
  font-weight: 600;
  font-size: 14px;
  color: white;
}
.showtouxiangli{
  height: 300px;
  width: 300px;
  margin: 0 auto;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.showtouxiangli img{
  width: 100%;
  /* height: 100%; */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.showtouxiang{
  width: 100%;
  height: 100%;
  border:1px solid red;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(51, 51, 51);
  z-index: 1001;
}
.modifytouxiang input{
width: 100%;
height: 45px;
position: absolute;
left: 0;
right: 0;
/* z-index: 1000; */
display: none;
/* opacity: 0; */
top: 40px;
}
.kongge{
    height: 5px;
}
.infoitemli{
  margin-top: 40px;
}
</style>