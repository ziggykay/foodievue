<template>
<section>
    <div class="container-fluid col-10">
      <div class="heading-container flex">
        <h2>會員註冊</h2>
      </div>
      
        <div class="flex" style="justify-content: center;">
              <table>
                  <tr>
                      <td><label for="username">真實姓名</label></td>
                      <input type="text" class="name" v-model="username" placeholder="請輸入收件真實姓名">
                  </tr>

                  <tr>
                      <td><label for="password">密碼</label></td>
                      <input type="password" class="password" v-model="password" placeholder="請輸入密碼">
                  </tr>

                  <tr>
                    <td><label for="password">確認密碼</label></td>
                    <input type="password" class="password" v-model="password" placeholder="再次確認密碼">
                </tr>
       
                  <tr>
                      <td><label for="email">登入信箱</label></td>
                      <input type="email" class="email" v-model="email" placeholder="請輸入E-mail">
                  </tr>
       
                  <tr>
                      <td><label for="tel">手機號碼</label></td>
                      <input type="text" class="tel" v-model="tel" placeholder="請輸入手機號碼">
                  </tr>

                  <tr>
                      <td><label for="birthday">生日</label></td>
                      <input type="date" class="birthday" v-model="birthday">
                  </tr>
                  
                  <tr>
                      <div class=“align-items-center”><button class="btn_sub" @click="nextPage()">註冊</button></div>
                  </tr>
              </table>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'LoginView',
  props:{
  }
}
</script>
<style>
.td{
    width: 100px;
    height: 30px;
}
.username .password .email .name .tel .birthday .checkcode {
    width: 251px;
    height: 32px;
    border: 1px solid #A6A6A6;
    border-radius: 5px;
    padding-left: 10px;
}
.btn_sub{
  margin-top: 15px;
    width: 110px;
    height: 40px;
    background-color: #F9CA33;
    border: 1px solid #F9CA33 ;
    border-radius: 5px;
    padding-left: 10px;
}

</style>