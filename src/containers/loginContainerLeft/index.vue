<template>
  <section>
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
      <div id="containerInput">
        <boxInput type="text" placeholder="Usuário" setClass="user" v-model="user" />
        <boxInput type="password" placeholder="Senha" setClass="user" v-model="password" />
        <div id="messageError"></div>
        <boxInput @continue="login" type="button" value="Continuar" setClass="button"/>
      
      </div>
    </div>
  </section>
</template>
<script>
import boxInput from "@/components/input/index.vue";
import modelTitle from "@/components/title/index.vue";
export default {
  name: "LoginContainerLeft",
  components: {
    boxInput,
    modelTitle,
  },
  data() {
    return {
      user:'',
      password:''
    };
  },
  methods: {
    login() {
     this.$router.push({name: 'Home'})
    },
  },
};
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>
