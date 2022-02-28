<template>
  <div id="center">
    <h1>{{textContentTwee}}</h1>   
    <p>secunds</p>
  </div>
</template>
<script>

export default {
  name: "stopwatch",
  components: {
  
  },
  data() {
    return {
      actualClock: "",
      dayWeek: "",
      textContentTwee: "600",
    };
  },
  methods: {
    stopWatch: function () {
      let time = this;
      let initTimer = 600;
      setInterval(function () {
        time.textContentTwee = initTimer;
        initTimer--;
        if (initTimer === 0) {
          time.$router.push({ name: "Login" });
        }
      }, 1000);
    },
  },
  mounted() {
    this.stopWatch();
  },
};
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>
