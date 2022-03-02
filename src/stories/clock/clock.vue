<template>
  <div :class="setClassdiv"  >
    <p :style="size" :class="classes" v-if="type === 'p'">
      {{ text }}
     
    </p>  
   
  </div>
</template>
<script>

export default {
  name: 'clock',

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

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>
