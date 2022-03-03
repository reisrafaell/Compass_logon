<template>
  <div id="center">
    <img draggable="false" src="@/assets/Erro-404.jpg" alt="" />
  </div>
</template>
<script>
export default {
  name: "Page404",

  methods: {
    redirect() {
      let initTimer = 5;
      setInterval(() => {
        initTimer--;
        if (initTimer === 0) {
          this.$router.push("Login");
        }
      }, 1000);
    },
  },
  mounted() {
     const Title =  document.getElementById('title')
     Title.innerText= 'Erro-404'
    this.redirect();
  },
};
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>
