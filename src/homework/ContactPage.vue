<template>
  <div>
    <header-page />
    <form action="post">
        <table>
            <tr>
                <th>이름  :</th>
                <td colspan="2"><input type="text" required></td>
            </tr>
            <tr>
                <th>연락처  :</th>
                <td colspan="2"><input type="tel" maxlength="11" required></td>
            </tr>
            <tr>
                <th>이메일  :</th>
                <td colspan="2"><input type="email" required></td>
            </tr>
            <tr>
                <td colspan="3">
                    <hr />
                    <p style="text-align: left;"><b>문의사항</b></p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </td>
            </tr>
            <tr>
                <td><input type="reset" value="재작성"></td>
                <td><input type="submit" value="확인"></td>
            </tr>
        </table>
    </form>
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
    form{
        margin: 0 auto;
        width: 250px;
        border: 2px solid black;
    }
    tr{
        text-align: right;
    }
    span{
        display: block;
    }
</style>