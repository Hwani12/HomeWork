<template>
  <div>
    <header-page />
    <h1>Show me the MONEY</h1>
    <hr />
    <router-link to="../board"><h3 class="back">게시판으로 이동</h3></router-link>
  </div>
</template>

<script>
import HeaderPage from './Header/HaederPage.vue'
export default {
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