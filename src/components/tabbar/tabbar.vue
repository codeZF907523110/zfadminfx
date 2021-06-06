<template>
  <div>
    <router-view></router-view>
    <div class='tabbar' >
          <!-- 组建添加事件@click.native -->
          <tabbaritem  v-for="(item,index) in tabbartexts" :key='index' :tabbarimg="tabbarimgs[index]" :tabbartext="item" :tabbari="index" @click.native='sendindex(index)'></tabbaritem>

    </div>
  </div>
</template>
<script>
import tabbaritem from './tabbaritem.vue'
export default {
  data(){
    return{
      tabbarimgs:[require('../../assets/img/tabbar/message.png'),require('../../assets/img/tabbar/tongxun.png'),require('../../assets/img/tabbar/find.png'),require('../../assets/img/tabbar/myself.png')],
      tabbartexts:['微信','通讯录','发现','我的']
    }
  },
  components: { tabbaritem },
  methods:{
    sendindex(pageindex){
      this.$emit('getindex',pageindex)
    }
  }
}
</script>
<style>
.tabbar{
   display: flex;
    width: 100vw;
    box-sizing: border-box;
    height: 50px;
    background-color: rgb(248, 248, 248);
    /* border:1px solid red; */
    position: fixed;
    bottom: 0;
    margin: 0;
    padding: 0;
    z-index: 1000;
}
</style>