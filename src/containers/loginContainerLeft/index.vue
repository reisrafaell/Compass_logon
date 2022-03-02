<template>
  <div id="container">
    <div id="image">
      <img src="@/assets/logocompass.png" alt="logoCompass" />
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
          this.setLogged()
          this.$router.push({ name: "Home" });

        } else {
          (this.erroIsLogged = true),
            (this.inputErro = "border: 1px solid  #E9B425;");
        }
      });
    },
  },

};
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>
