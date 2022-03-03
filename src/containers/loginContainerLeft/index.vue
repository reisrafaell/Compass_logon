<template>
  <div id="container">
    <div id="image">
      <img draggable="false" src="@/assets/LogoBranco.png" alt="logoCompass" />
    </div>
    <div id="center">
      <div id="text">
        <modelTitle size="font-size: 60px" type="h1" text="Olá," />
        <modelTitle
          size="font-size:16px"
          style="width: 300px"
          type="h3"
          text="Para continuar navegando de forma segura, efetue o login na rede."
        />
      </div>
      <modelTitle size="font-size:30px" type="h3" text="Login" />
      <form @submit.prevent="login" id="containerInput">
        <boxInput
          type="text"
          :style="inputErro"
          placeholder="Usuário"
          setClass="inputUser"
          v-model="user"
        />
        <boxInput
          type="password"
          :style="inputErro"
          placeholder="Senha"
          setClass="inputUser"
          v-model="password"
        />
        <div id="messageError">
          <modelTitle
            setClassdiv="divMessageErro"
            setClass="messageErro"
            type="h3"
            v-show="erroIsLogged"
            text="Ops, usuário ou senha inválidos. Tente novamente!"
          />
        </div>
        <boxInput type="submit" value="Continuar" setClass="button" />
      </form>
    </div>
  </div>
</template>
<script>
import boxInput from "@/components/input/index.vue";
import modelTitle from "@/components/title/index.vue";
import {mapMutations} from 'vuex'

export default {
  name: "LoginContainerLeft",
  components: {
    boxInput,
    modelTitle,
  },
  data() {
    return {
      user: "",
      password: "",
      erroIsLogged: false,
      inputErro: "",
    };
  },
  methods: {
    ...mapMutations(['setLogged']),
    login() {
      this.$store.state.users.forEach((event) => {
        if (this.user === event.user && this.password === event.password) {
          localStorage.setItem("user", this.user);
          localStorage.setItem("password", this.password);
          this.setLogged()
          this.$router.push({ name: "Home" });

        } else {
          (this.erroIsLogged = true),
            (this.inputErro = "border: 1px solid  #E9B425;");
        }
      });
    },
      redirect() {
      let initTimer = 5;
      setInterval(() => {
        initTimer--;
        if (initTimer === 0) {
         this.isLogged()
        }
      }, 1000);
    },

    isLogged(){
        this.$store.state.users.forEach((event) => {
        if(localStorage.user === event.user ){
           this.$router.push({ name: "Home" });
        }else{
          return false
        }
      });
    }

  },
 created(){
   this.redirect()
     const Title =  document.getElementById('title')
     Title.innerText= 'Login'
     this.user = localStorage.getItem("user", this.user);
         this.password = localStorage.getItem("password", this.password);
   
  }

};
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>
