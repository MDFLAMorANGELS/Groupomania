<template>
<div class="form">
    <div v-if="mode == 'login'" class="container">
        <h2>Connexion a Groupomania</h2>
        <p @click="switchToCreateAccount">Tu n'as pas encore de compte ? <span>creer un compte</span></p>
        <form @submit.prevent="login()" action="">
            <div class="inputBox">
                <label for="email">email adresse : </label>
                <input type="email" v-model="email" autofocus name="email" placeholder="Adresse mail" required="required">
            </div>
            <div class="inputBox">
                <label for="password">Mot de passe : </label>
                <input type="password" v-model="password" name="password" placeholder="Mot de passe" required="required">
            </div>
            <div class="inputBox">
                <input type="submit" value="Connexion">
            </div>
        </form>
    </div>
    <div v-else class="container">
        <h2>Inscription a Groupomania</h2>
        <p @click="switchToLogin">Vous avez déja un compte ? <span>Connecte toi</span></p>
        <form @submit.prevent="createAccount()" action="">
            <div class="inputBox">
                <label for="username">Nom d'utilisateur :  </label>
                <input type="text" v-model="username"  name="username" placeholder="Nom d'utilisateur" required="required">
            </div>
            <div class="inputBox">
                <label for="email">email adresse : </label>
                <input type="email" v-model="email" name="email" placeholder="Adresse mail" required="required">
            </div>
            <div class="inputBox">
                <label for="password">Mot de passe : </label>
                <input type="password" v-model="password" name="password" placeholder="Mot de passe" required="required">
            </div>
            <div class="inputBox">
                <input type="submit" value="Créer mon compte">
            </div>
        </form>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Form_login',
  data: function() {
    return {
        mode: 'login',
        username:'',
        email: '',
        password: '',
    }
  },
  computed: {
      ...mapState(['status'])
  },
  methods: {
      switchToCreateAccount: function() {
          this.mode = 'create';
      },
      switchToLogin: function() {
          this.mode = 'login';
      },
      login: function () {
          const self= this;
          this.$store.dispatch('login', {
              email: this.email,
              password: this.password,
          }).then(function () {
              self.$router.push('/Accueil');
          }, function(error) {
              console.log(error);
          })
      },
      createAccount: function() {
          const self= this;
          this.$store.dispatch('createAccount', {
              username: this.username,
              email: this.email,
              password: this.password,
          }).then(function () {
              self.login();
          }, function(error) {
              console.log(error);
          })
      },
  }
}
</script>

<style scoped>

.form{
    width: 70rem;
    padding: 5%;
}

.container {
    position: relative;
    padding: 2% 0 1% 0;
    background: #fff;
    border-radius: 20px;
    box-shadow: 3px 10px 25px rgba(0, 0, 0, 0.3);
    background-color: #ffffff4f;
}

.container h2 {
    padding-bottom: 5%;
    font-size: 2em;
}

.container p {
    margin-bottom: 5%;
    font-size: 1.1em;
}

p span {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
    text-decoration: none;
}
.inputBox {
    margin: 2%;
}
input[type=text], input[type=password], input[type=email], input[type=submit] {
    width: 50%;
    padding: 12px 2%;
    margin: 1%;
    border: 2px solid rgba(230, 230, 230, 0.527);
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #ffffffb9;
    box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.2);
}
/*style du button */
input[type=submit] {
    background: linear-gradient(45deg,#feab06ad,#c20defa4);
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 30%;
    border-radius: 30px;
    font-size: 1.2em;
    transition: 1s;
}
input[type=submit]:hover {
    color: #5ce963;
    background: linear-gradient(220deg,#fead06,#c00def);
    transition: 1s;
    transform: scale(105%);
}
</style>
