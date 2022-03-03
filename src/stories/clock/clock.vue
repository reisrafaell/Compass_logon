<template>
  <div :style="style">
    <h1 :style="style">{{ hours }}:{{ minutes }}</h1>
    <p :style="style">
      {{ weekDay }}, {{ monthDay }} de {{ month }} de {{ years }}
    </p>
  </div>
</template>

<script>
export default {
  name: "clock",

  props: {
    hours: {
      type: String,
      required: true,
      default: "12",
      validator: function (value) {
        return ["20", "24", "06", "12"].indexOf(value) !== -1;
      },
    },
    minutes: {
      type: String,
      required: true,
      default: "30",
      validator: function (value) {
        return ["20", "60", "30", "15"].indexOf(value) !== -1;
      },
    },

    weekDay: {
      type: String,
      required: true,
      default: "Domingo",
      validator: function (value) {
        return (
          ["Segunda-Feira", "Terça-Feira", "Domingo"].indexOf(value) !== -1
        );
      },
    },
    monthDay: {
      type: String,
      required: true,
      default: "10",
      validator: function (value) {
        return ["10", "20", "30"].indexOf(value) !== -1;
      },
    },
    month: {
      type: String,
      required: true,
      default: "janeiro",
      validator: function (value) {
        return ["Janeiro", "Fevereiro", "Dezembro"].indexOf(value) !== -1;
      },
    },
    years: {
      type: Number,
      required: true,
      default: 2022,
      validator: function (value) {
        return ["2022", "2020", "2019"].indexOf(value) !== -1;
      },
    },

    color: {
      type: String,
    },

    backgroundColor: {
      type: String,
    },
  },

  computed: {
    style() {
      return {
        color: this.color,
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
  justify-content: flex-start;
  align-items: center;
}

div h1 {
  font-weight: bold;
  font-size: 146px;
  margin-bottom: 20px;
}
div p {
  margin-top: -60px;
}
</style>