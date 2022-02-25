<template>
  <div :class="setClass">
    <input
      autocomplete="off"
      @click="$emit('continue')"
      :type="type"
      @keyup="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      :value="value"
    />
    <img v-if="image()" src="@/assets/userIcon.png" alt="iconUser" />
    <img v-else src="@/assets/passwordIcon.png" alt="iconInput" />
  </div>
</template>
<script>
export default {
  name: "boxInput",

  emits: "continue",

  props: {
    type: {
      type: String,
      required: true,
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
  },
};
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>
