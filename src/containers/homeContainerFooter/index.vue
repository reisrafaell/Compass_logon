<template>
  <div>
    <textContent
      setClassdiv="textFooter"         
      type="p"
      :text="textContent"
    />

    <textContent
      setClassdiv="textFooterTwo"    
      size="font-size: clamp(0.8rem, 0.5vw, 1.5rem);"
      type="p"
      :text="textContentTwo"
    />
    <stopwatch />
    <textContent
      setClassdiv="navegation"    
      size="font-size: clamp(0.8rem, 0.5vw, 1.5rem);"
      type="p"
      :text="navegation"
    />
    <buttonLogout />
  </div>
</template>

<script >

import stopwatch from "@/components/stopWatch/index.vue";
import buttonLogout from "@/components/logout/index.vue";
import textContent from "@/components/textContent/index.vue"

export default {
  name: "homeContainerFooter",
  components: {
  
    stopwatch,
    buttonLogout,
    textContent
  },
  data() {
    return {
      textContent:
        "Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.",
      textContentTwo: "Application refresh in",
      navegation: "Continuar Navegando",
    };
  },
};
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>