<template>
  <boxInput
    @buttonClick="click()"
    type="button"
    style=""
    value="Logout "
    setClass="buttonFooter"
  />
</template>
<script>
import boxInput from "@/components/input/index.vue";
export default {
  name: "buttonLogout",
  components: {
    boxInput,
  },
  data() {
    return {};
  },
  methods: {
    click() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>
