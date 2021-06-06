<template>
  <div class='addfriends'>
      <tobbar :tobbartext="'添加朋友'" :isshowicn="false"></tobbar>
      <div class='searchfriend' @click="$router.push('/addfriends/searchfriend')">
          <span class='el-icon-search'>峰信号/手机号</span>
      </div>
  </div>
</template>

<script>
import tobbar from '../../components/tobbar/tobbar.vue'
export default {
  components: { tobbar },

}
</script>

<style scoped>
.searchfriend{
    width: 95%;
    margin: 0 auto;
    height: 20px;
    background-color: white;
    font-size: 12px;
    color: rgb(189, 189, 189);
    margin-top: 40px;
    text-align: center;
    line-height: 20px;
}
</style>