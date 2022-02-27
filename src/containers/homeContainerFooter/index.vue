<template>
<div>
      <modelTitle setClassdiv="textFooter" setClass="" size="font-size: clamp(0.8rem, 0.5vw, 1.5rem);" type="h3" :text="textContent" />
               
      <modelTitle setClassdiv="textFooterTwo" setClass="aaa" size="font-size: clamp(0.8rem, 0.5vw, 1.5rem);" type="h3" :text="textContentTwo" />
        <stopwatch/>
      <modelTitle setClassdiv="navegation" setClass="" size="font-size: clamp(0.8rem, 0.5vw, 1.5rem);" type="h3" :text="navegation" />
      <boxInput type="submit"   style="" value='Logout ' setClass="buttonFooter"/>                
                  
</div>
    
</template>

<script >
import modelTitle from "@/components/title/index.vue"
import boxInput from "@/components/input/index.vue";
import stopwatch from "../../components/stopWatch/index.vue"

export default {
    name: 'homeContainerFooter',
    components:{
    boxInput,
        modelTitle,
        stopwatch
},
data(){
    return{
        textContent: 'Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.',
        textContentTwo: 'Application refresh in',
        navegation: 'Continuar Navegando'
    }

}
    }
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>