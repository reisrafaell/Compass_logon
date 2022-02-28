<template>
<div id="center">
    <div id="textContent">
   <modelTitle setClass="textHomepageH2"  setClassdiv="textHomeH2" type="h2" text="Our mission is" />
   <modelTitle setClass="textHomepageH3" setClassdiv="textHome" type="h3" text="Nossa missão é" />
   <modelTitle setClass="textHomepageH1"  type="h1" text="to transform the world" />
   <modelTitle setClass="textHomepageH3" setClassdiv="textHome" type="h3" text="transformar o mundo" />
   <modelTitle setClass="textHomepageH1"  type="h1" text="building digital experiences" />
   <modelTitle setClass="textHomepageH3" setClassdiv="textHome" type="h3" text="construindo experiências digitais" />
   <modelTitle setClass="textHomepageH1"  type="h1" text="that enable our client’s growth" />
   <modelTitle setClass="textHomepageH3" setClassdiv="textHome" type="h3" text="que permitam o crescimento dos nossos clientes" />
  
    </div>
</div>
    
</template>
<script >
import modelTitle from "../../components/title/index.vue"
export default {
    name: 'homeContainerRight',
    components:{ 
        modelTitle}  

}
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>
