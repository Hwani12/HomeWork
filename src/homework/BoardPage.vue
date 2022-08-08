<template>
    <div>
        <header-page />
        <h1> 게시판 </h1>
        <hr />
        <ul>
            <router-link to="/board/show"><li class="board">1</li></router-link>
            <router-link to="/board/show"><li class="board">2</li></router-link>
            <router-link to="/board/show"><li class="board">3</li></router-link>
            <router-link to="/board/show"><li class="board">4</li></router-link>
            <router-link to="/board/show"><li class="board">5</li></router-link>
            <router-link to="/board/show"><li class="board">6</li></router-link>
            <router-link to="/board/show"><li class="board">7</li></router-link>
            <router-link to="/board/show"><li class="board">8</li></router-link>
            <router-link to="/board/show"><li class="board">9</li></router-link>
            <router-link to="/board/show"><li class="board">10</li></router-link>
        </ul>
        <hr />
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