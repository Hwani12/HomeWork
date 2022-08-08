<template>
    <div class="header">
        <nav class="main_menu">
            <ul>
                <router-link to="/"><li><a href="#">첫 화면</a></li></router-link>
                <router-link to="/about"><li><a href="#">소개</a></li></router-link>
                <router-link to="/board"><li><a href="#">게시판</a></li></router-link>
                <router-link to="/contact"><li><a href="#">문의</a></li></router-link>
            </ul>
            <hr />
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .header{
        text-align: center;
    }
    .main_menu li{
        display: inline-block;
    }

    .main_menu li a{
        text-align: center;
        display: block;
        height: 50px;
        padding: 0 85px;
        font-size: 17px;
        color: #333;
        font-weight: bold;
        line-height: 50px;
    }
    .main_menu li a:hover{
        cursor: pointer;
        transition: .3s ease;
        color: rgb(174, 0, 255);
    }
</style>