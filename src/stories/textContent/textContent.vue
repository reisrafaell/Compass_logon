<template>
  <div>
    <p :style="style" :class="classes">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "textCotent",

  props: {
    text: {
      type: String,
      required: true,
      default: "Default text simple",
    },

    size: {
      type: String,
      default: "textFooter",
      validator: function (value) {
        return (
          ["temperature", "textFooter", "navegation"].indexOf(value) !== -1
        );
      },
    },

    backgroundColor: {
      type: String,
    },

    color: {
      type: String,
    },

    fontSize: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        [`${this.size}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color,
        fontSize: this.fontSize,
      };
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.temperature {
  font-weight: 700;
  font-size: 100px;
  color: #222222;
}
.textFooter {
  font-size: 200px;
  color: aliceblue;
  background: #222222;
}
</style>