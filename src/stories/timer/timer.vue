<template>
  <div :style="style">
    <h1 :style="style">{{ minutes }}</h1>
    <p :style="style"> Secunds
    </p>
  </div>
</template>

<script>
export default {
  name: "timer",

  props: {
  
    minutes: {
      type: String,
      required: true,
      default: "600",
      validator: function (value) {
        return  ["600", "400", "300", "100"].indexOf(value) !== -1;
      },
    },

    color: {
      type: String,
    },

    backgroundColor: {
      type: String,
    },
      fontSize:{
        type: String
    },
  },

  computed: {
    style() {
      return {
        color: this.color,
        fontSize: this.fontSize,
        backgroundColor: this.backgroundColor,
      };
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap%22");
* {
  font-family: "Poppins", sans-serif;
}

div {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
  justify-content: space-between;
  align-items: center;
}

div h1 {
  font-weight: bold;
  font-size:30px;
  margin-bottom: 20px;
}
div p {
  font-size: 12px;
  margin-top: -60px;
}
</style>