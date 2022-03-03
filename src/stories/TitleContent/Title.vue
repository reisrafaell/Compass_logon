<template> <div>
    <h1 :style="style" :class="setClass" v-if="type === 'h1'">
      {{ text }}
    </h1>
    <h2 :style="style" :class="setClass" v-else-if="type === 'h2'">
      {{ text }}
    </h2>
    <h3 :style="style" :class="setClass" v-else-if="type === 'h3'">
      {{ text }}
    </h3>
    <h4 :style="style" :class="setClass" v-else-if="type === 'h4'">
      {{ text }}
    </h4>
    <h5 :style="style" :class="setClass" v-else-if="type === 'h5'">
      {{ text }}
    </h5>
    <h6 :style="style" :class="setClass" v-else-if="type === 'h6'">
      {{ text }}
    </h6>
  </div>
</template>

<script>
export default {
  name: "Title",

  props: {
    text: {
      type: String,
      required: true,
      default: "Default title",
    },

    apply: {
        type: String,
        default: "textHomePage",
        authenticator: function (value) {
            return (
            ["textHomePage",
            "textHomepageTitle",
            "messageErro",
         
            ].indexOf(value) !== -1
        );
      },
    },

    type: {
        type: String,
        default: "h4",
        authenticator: function (value) {
            return ["h1", "h2", "h3", "h4", "h5", "h6"].indexOf(value) !== -1;
        },
    },

    color: {
        type: String,
    },

    fontSize:{
        type: String
    },

    backgroundColor:{
        type: String
    }
  },

  computed: {
    setClass() {
      return { [`${this.apply}`]: true };
    },
    style() {
      return {
        color: this.color,
        fontSize: this.fontSize,
        backgroundColor: this.backgroundColor
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
  width: 100%;
  justify-content: center;
  align-items: center;
}
.textHomePage {
      color: #c12d18;
    font-size: 36px;

    text-align: end;
    font-weight: bold;
    height: 35px;

}
.textHomepageTitle {
       color: #c12d18;
    font-size: 64px;
    text-align: end;
    font-weight: 700;
    height: 75px;
}

.messageErro{
  font-size: 16px;
    color: #e9b425;
    text-align: center;
}
</style>