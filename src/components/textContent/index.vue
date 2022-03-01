<template>
  <div :class="setClassdiv"  >
    <p :style="size" :class="setClass" v-if="type === 'p'">
      {{ text }}
     
    </p>  
   
  </div>
</template>
<script>
export default {
  name: "textContent",
  props: {
    type: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
   
    setClass: {
      type: String,
    },
    setClassdiv:{
      type:String,
      default:""
    }
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
