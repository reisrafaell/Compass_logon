<template>
  <section>
    <div id="center">
      <div id="text">
        <modelTitle  size="font-size: 60px" type="h1" text="Olá,"/>
        <modelTitle size="font-size:16px"  style="width: 300px;" type="h3" text="Para continuar navegando de forma segura, efetue o login na rede."/>  
        
        </div>
        <modelTitle size="font-size:30px" type="h3" text="Login"/>   
      <div id="containerInput">
        <boxInput type="text"  placeholder="Usuário" />
        <boxInput type="password"  placeholder="Senha"/>
        <div id="messageError"></div>
        <boxInput type="submit"  value="Continuar" class="button" />
       
      </div>
    </div>
  </section>
</template>
<script>


import boxInput from "../../components/input/index.vue";
import modelTitle from "@/components/title/index.vue";
export default {
  name: "LoginContainerLeft",
  components: {
    boxInput,  
    modelTitle,
  },
};
</script>

<style lang="sass" scoped>
@import './index.scss'
</style>
