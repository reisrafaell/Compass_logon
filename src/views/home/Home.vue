<template>
  <section >
    <homeContainerHeader/>
  <homeContainerCenter/>
    <homeContainerFooter/>
    
  </section>
</template>

<script>

import homeContainerCenter from '@/containers/homeContainerCenter';
import homeContainerFooter from '@/containers/homeContainerFooter';
import homeContainerHeader from '@/containers/homeContainerHeader/index.vue'

export default {
  name: 'Home',
  components: {
    homeContainerCenter,
    homeContainerFooter,
    homeContainerHeader
 
  }
}
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>

