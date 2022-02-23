<template>
  <div>  
    <h1 :style="size" v-if="type === 'h1'">
     {{text}}
    </h1>
    <h2 :style="size" v-else-if="type === 'h2'">
     {{text}}
    </h2>
    <h3 :style="size" v-else-if="type === 'h3'">
     {{text}}
    </h3>
    <h4 :style="size" v-else-if="type === 'h4'">
     {{text}}
    </h4>
    <h5 :style="size" v-else-if="type === 'h5'">
     {{text}}
    </h5>
    <h6 :style="size" v-else-if="type === 'h6'">
     {{text}}
    </h6>
  </div>
</template>
<script>
export default {
  name: "modelTitle",
  props: {
    type: {
      type: String,      
      required: true,
    },
    text:{
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '12px'
    }
  },
  mounted(){
    console.log(this.type)

  }
};
</script>
<style lang="scss" scoped>


@import './index.scss'
</style>
