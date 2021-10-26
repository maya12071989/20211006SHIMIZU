<template>

  <div class="container">
    <img src="../img/logo.png">
     
  <div class="circle">
  <input
    <p class="login">ログイン</p>
    <input type="email" v-model="email" placeholder="メールアドレス" required /></br>
    <input type="password" v-model="password" placeholder="パスワード" required />
    </br>
   
    <NuxtLink to="/home" class="button">ログイン</NuxtLink>

  </div>
  </div>

  

</template>
<script>
import firebase from "~/plugins/firebase";
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    register() {
      if (!this.email || !this.password) {
        alert("メールアドレスまたはパスワードが入力されていません。");
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(data => {
          data.user.sendEmailVerification().then(() => {
            this.$router.replace("/confirm");
          });
        })
        .catch(error => {
          switch (error.code) {
            case "auth/invalid-email":
              alert("メールアドレスの形式が違います。");
              break;
            case "auth/email-already-in-use":
              alert("このメールアドレスはすでに使われています。");
              break;
            case "auth/weak-password":
              alert("パスワードは6文字以上で入力してください。");
              break;
            default:
              alert("エラーが起きました。しばらくしてから再度お試しください。");
              break;
          }
        });
    }
  }
};
</script>
<style>
.login {
  font-size: 20px;
}

.circle {
  width: 400px;
  height: 200px;
  background: blue;
  border-radius: 10px;
  display: brock;
  margin: 100px auto;
  text-align: center;
  padding-top: 10px;
}

.button {
  color: white;
}

img{
width:150px;
}
</style>
