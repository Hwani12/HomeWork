<template>
    <div>
        <header-page />
        <h1> 고객 리스트 </h1>
        <hr />
        <ul>
            <li v-for="(post, idx) in this.$clientList" :key="idx">
                <router-link :to="{ name: 'boardShow', params:{
                    pageId : idx,
                }}"><li class="board">{{post.name}}</li></router-link>
            </li>
        </ul>
        <hr />
    </div>
</template>
<script>
import HeaderPage from '../Header/HaederPage.vue'
export default {
    components:{
      HeaderPage
    }
}
</script>
<style>
    h1{
        text-align: center;
    }
    a{
        text-decoration-line: none;
        color: black;
    }
    ul{
        list-style: none;
    }

    .board{
        width: 500px;
        display: block;
        margin: 10px auto;
        padding: 1px;
        padding-left: 10px;
        border: 2px solid #000;
        border-radius: 20px;
    }
    .board:hover{
        cursor: pointer;
        border: 3px solid red;
        padding: 0 0 0 9px;
    }
</style>