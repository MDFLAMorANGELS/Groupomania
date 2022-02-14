<template>
<div class="form">
    <div v-if="mode == 'login'" class="container">
        <h2>Connexion a Groupomania</h2>
        <p @click="switchToCreateAccount">tu na pas encore de compte <span>creer un compte</span></p>
        <form @submit.prevent="login()" action="">
            <div class="inputBox">
                <label for="email">email adresse : </label>
                <input type="email" name="email" placeholder="Adresse mail" required="required">
            </div>
            <div class="inputBox">
                <label for="password">Mot de passe : </label>
                <input type="password" name="password" placeholder="Mot de passe" required="required">
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
                <label for="username">Username : </label>
                <input type="text" name="username" placeholder="Username" required="required">
            </div>
            <div class="inputBox">
                <label for="email">email adresse : </label>
                <input type="email" name="email" placeholder="Adresse mail" required="required">
            </div>
            <div class="inputBox">
                <label for="password">Mot de passe : </label>
                <input type="password" name="password" placeholder="Mot de passe" required="required">
            </div>
            <div class="inputBox">
                <input type="submit" value="Connexion">
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
  }
}
</script>

<style scoped>

.form{
    width: 40%;
    padding: 5%;
}

.container {
    position: relative;
    padding: 5%;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
}

.container h2 {
    padding-bottom: 5%;
}

.container p {
    margin-bottom: 5%;
}

p span {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}


.inputBox {
    margin: 2%;
}

input[type=text], input[type=password], input[type=email], input[type=submit] {
    width: 100%;
    padding: 12px 4%;
    margin: 8px 0px;
    border: 2px solid rgb(230, 230, 230);
    box-sizing: border-box;
    border-radius: 10px;
}

/*style du button */
input[type=submit] {
    background: linear-gradient(45deg,#fead06,#c00def);
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
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
