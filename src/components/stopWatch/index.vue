<template>
 <div id="center">
      <modelTitle setClassdiv="textFooterTwee" setClass="" size="font-size: clamp(0.8rem, 2.5vw, 4rem);" type="h3" :text="textContentTwee" />
      <p>secunds</p>
  
 </div>
</template>
<script>
import modelTitle from "@/components/title/index.vue"

export default {
  name: "stopwatch",
  components:{
    modelTitle
  },
  data() {
    return {  
      actualClock:"",
      dayWeek: "",
      textContentTwee: '600',

    };
  },
  methods: {
   
 
  },
  mounted(){
    this.stopWatch()
  }

    } 

</script>
<style lang="sass" scoped>
@import './index.scss'
</style>
