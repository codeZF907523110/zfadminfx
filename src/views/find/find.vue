<template>
  <div class='wechat'>
      <div class='wechattop'></div>
      <tobbar :tobbartext="'发现'" :isshowicn="true"></tobbar>
      <div class='fxitem1' v-for="(item,index) in fxitemtexts" :key="index"> 
        <div class='kongge' v-show="index==1||index==2||index==4||index==6||index==7||index==9"></div>
        <keep-alive>
          <fxitem :fxitemimg="fxitemimgs[index]" :fxitemtext="item"></fxitem>
        </keep-alive>
        
      </div>
  </div>
</template>

<script>

import Tobbar from '../../components/tobbar/tobbar.vue'
import fxitem from '../../components/fxitem/fxitem.vue';
export default {
  data(){
    return{
      userinfo:{},
      isvisit:0,
      fxitemimgs:[require('assets/img/findimg/pyquan.png'),require('assets/img/findimg/shipin.png'),require('assets/img/findimg/saoyisao.png'),require('assets/img/findimg/yaoyiyao.png'),require('assets/img/findimg/kanyikan.png'),require('assets/img/findimg/souyisou.png'),require('assets/img/findimg/fujin.png'),require('assets/img/findimg/gouwu.png'),require('assets/img/findimg/game.png'),require('assets/img/findimg/xcx.png')],
      fxitemtexts:['朋友圈','视频号','扫一扫','摇一摇','看一看','搜一搜','直播和附近','购物','游戏','小程序']
    }
  },
  components: {  Tobbar ,fxitem},

}
</script>

<style>
.wechattop{
  height: 40px;
}
</style>