<template>
  <div>
    <LoginContainerLeft /> 
    <LoginContainerRight />
  </div>
</template>


<script>
import LoginContainerLeft from "@/containers/loginContainerLeft/index.vue";
import LoginContainerRight from "@/containers/loginContainerRight/index.vue";

export default {
  name: "Login",
  components: {
    LoginContainerRight,
    LoginContainerLeft
  },
};
</script>

<style lang="sass">
@import './index.scss'
</style>

