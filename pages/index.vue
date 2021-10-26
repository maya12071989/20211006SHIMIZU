<template>

  <div class="container">
  <img src="../img/logo.png">
  <div class="header_link">
     <NuxtLink to="/index">新規登録</NuxtLink>
     <NuxtLink to="/register">ログイン</NuxtLink>
  </div>
  <div class="circle">
  <input
    <p class="login">新規登録</p>
    <input type="text" v-model="name" placeholder="ユーザーネーム" required /></br>
    <input type="email" v-model="email" placeholder="メールアドレス" required /></br>
    <input type="password" v-model="password" placeholder="パスワード" required />
    </br>
   
    <NuxtLink to="/register" class="button">新規登録</NuxtLink>
  </div>
  </div>
  
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  data() {
    return {
      message: "ログインができておりません"
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.message = "ログイン済みです";
      }
    });
  }
};
</script>
<style>

.container{
background:red;
height:1500px;
}
.login {
  font-size: 20px;
}

.circle{
width:400px;
height:200px;
background:blue;
border-radius:10px;
display:brock;
margin:100px auto;
text-align:center;
padding-top:10px
}

.button{
color:white;
}
.header_link{
display:flex;
}
</style>
