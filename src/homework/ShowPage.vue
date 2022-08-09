<template>
  <div>
    <header-page />
    <h1>고객 리스트</h1>
    <hr />
    <template v-if="pageId">
      <h1>{{ this.$clientList[pageId].name }}</h1>
      <h2>나이 : {{ this.$clientList[pageId].age }}</h2>
      <h2>사는 지역 : {{ this.$clientList[pageId].address }}</h2>
      
      <hr />
    </template>
    <template v-else>
      게시글을 찾을 수 없습니다.
    </template>
    <router-link to="/board"><h3 class="back">게시판으로 이동</h3></router-link>
  </div>
</template>

<script>
import HeaderPage from '../Header/HaederPage.vue'
export default {
    data(){
      return {
        routeParams : this.$route.params,
        pageId: this.$route.params.pageId
      }
    },
    components:{
      HeaderPage
    }
}
</script>

<style>
  .back{
    text-align: center;
  }
  .back:hover{
    cursor: pointer;
    color: darkred;
  }
</style>