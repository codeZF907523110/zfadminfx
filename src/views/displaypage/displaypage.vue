<template>
  <div class='dispalypage'>
      <!-- {{pagenumber}} -->
      <div class="bannerWrap">
      <!-- https://www.swiper.com.cn/demo/220-effect-fade.html -->

      <!-- Swiper -->
      <div class="swiper-container ">
          <!-- 轮播页 -->
        <div class="swiper-wrapper swiperpages" >
          <div class="swiper-slide swiperpage1" >
              <!-- <img src="./aaa.jpg" alt=""> -->
              <wechat></wechat>
          </div>
          <div class="swiper-slide swiperpage2" >
              <!-- <img src="./aaa.jpg" alt=""> -->
              <mail></mail>  
            </div>
          <div class="swiper-slide wsiperpage3" >
              <!-- <img src="./aaa.jpg" alt=""> -->
             <find></find>
            </div>
          <div class="swiper-slide">
              <!-- <img src="./aaa.jpg" alt=""> -->
              <myself></myself>
            </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination swiper-pagination-white" id="swiper-spit"></div>
        <!-- 左右按钮
        <div class="swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div> -->
      </div>
    </div>
      <tabbar @getindex='parentEvent'></tabbar>
  </div>
</template>

<script>
import tabbar from '../../components/tabbar/tabbar.vue'
import Swiper from '../../../node_modules/swiper'; 
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'
import Wechat from '../wechat/wechat.vue';
import Mail from '../mail/mail.vue';
import Find from '../find/find.vue';
import Myself from '../myself/myself.vue';
var swiper;
export default {
    data(){
        return{
            swiperindex:0,
            pagenumber:parseInt(this.$route.params.id[4]) ,
        }
    },
  components: { tabbar, Wechat, Mail, Find, Myself },
  methods:{
      parentEvent(data){
          swiper.slideTo(data,0)
          this.$router.push('/wechat/page'+data)
      }
  },
  mounted(){
      let that=this
      swiper = new Swiper('.swiper-container', {
        //   touchMoveStopPropagation:true,
            touchRatio : 0.5,
            on:{
                init: function(){//swiper初始化时运行
                    this.slideTo(that.pagenumber,0)
                }, 
                slidePrevTransitionEnd:function(){ //向左滑动完成运行
                    that.$router.push('/wechat/page'+this.activeIndex)
                },
                slideNextTransitionEnd:function(){ //向右滑动完成运行
                     that.$router.push('/wechat/page'+this.activeIndex)
                },
            },
      }); 
      
  }
}
</script>

<style>
.swiperpages{
    height: 100vh;
    padding: 0;
    
}
.swiperpage1,.swiperpage2{
    height: 100%;
    overflow-y:scroll;
}
</style>