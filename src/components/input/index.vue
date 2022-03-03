<template>
  <div :class="setClass">
    <input
      autocomplete="off"
      @click="$emit('buttonClick')"
      :type="type"
      @keyup="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      :value="value"
    />
    <img draggable="false"  v-if="image()" src="@/assets/userIcon.png" alt="iconUser" />
    <img draggable="false"  v-else-if="imageInput()" src="@/assets/passwordIcon.png" alt="iconInput" />
    <img  draggable="false" v-else-if="this.type== 'button'"  :style="{display: none}" src="" alt="">
  </div>
</template>
<script>
export default {
  name: "boxInput",

  emits: "buttonClick",

  props: {
    type: {
      type: String,
     
    },

    placeholder: {
      type: String,
    },

    value: {
      type: String,
      default: "",
    },
    setClass: {
      type: String,
    },
    src: {
      type: String,
    },
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    image() {
      return this.type === "text";
    },
    imageInput(){
      return this.type === "password";
    }
  },
};
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>
