<template>
  <div class='newfriends'>
      <tobbar :tobbartext="'新的朋友'" :isshowicn="false"></tobbar>
      <div class='addfriends'>
          <addfriends></addfriends>
      </div>
      <div class='newnofriends'>
            <newfrienditem :touxiangimg="require('assets/img/touxiang.jpg')" :usertext="'小傻逼'"></newfrienditem>
            <newfrienditem :touxiangimg="require('assets/img/touxiang.jpg')" :usertext="'小傻逼'"></newfrienditem>
            <newfrienditem :touxiangimg="require('assets/img/touxiang.jpg')" :usertext="'小傻逼'"></newfrienditem>
      </div>
      
  </div>
</template>

<script>
import Newfrienditem from 'components/newfrienditem/newfrienditem.vue'
import tobbar from 'components/tobbar/tobbar.vue'
import Addfriends from 'components/addfriends/addfriends.vue'
export default {
  components: { tobbar, Addfriends,Newfrienditem },

}
</script>

<style>
.newnofriends{
    margin-top: 10px;
}
.addfriends{
    margin-top:10px;
}
</style>